function parseFrontmatter(yaml) {
  const meta = {};
  if (!yaml) return meta;
  yaml.trim().split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      meta[key] = value;
    }
  });
  return meta;
}

function stripMarkdown(md) {
  return md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/\*{1,3}/g, '')
    .replace(/_{1,3}/g, '')
    .replace(/~~/g, '')
    .replace(/^>\s*/gm, '')
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function generateExcerpt(body) {
  if (!body) return '';
  const cleaned = stripMarkdown(body);
  if (cleaned.length <= 150) return cleaned;
  const truncated = cleaned.slice(0, 150);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 100) {
    return truncated.slice(0, lastSpace) + '\u2026';
  }
  return truncated + '\u2026';
}

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("../../routes/app/nyheter/*.md");
  const rawPostFiles = import.meta.glob("../../routes/app/nyheter/*.md", { as: 'raw', eager: true });
  const iterablePostFiles = Object.entries(allPostFiles);

  if (iterablePostFiles.length > 0) {
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        // @ts-ignore
        const { metadata } = await resolver();
        const postPath = path.slice(12, -3);

        const rawContent = rawPostFiles[path] || '';
        const parts = rawContent.split('---');
        const body = parts.length >= 3 ? parts.slice(2).join('---').trim() : '';
        const excerpt = generateExcerpt(body);

        return {
          meta: metadata,
          path: postPath,
          excerpt,
        };
      })
    );
    allPosts.sort((a, b) => {
      // Perform date comparison thing
      const dateA = new Date(a.meta.date);
      const dateB = new Date(b.meta.date);

      // Siort in descending order (newest first)
      return dateB - dateA;
    });

    return allPosts;
  }

  // empty array if you cant find a post!
  return [];
};

export const fetchMarkdownPostBySlug = (slug) => {
  const allPostFiles = import.meta.glob("../../routes/app/nyheter/*.md", { as: 'raw', eager: true });
  const entries = Object.entries(allPostFiles);

  for (const [path, rawContent] of entries) {
    if (path.endsWith(`/${slug}.md`)) {
      const postPath = path.slice(12, -3);
      const parts = rawContent.split('---');
      const frontmatterRaw = parts.length >= 2 ? parts[1] : '';
      const body = parts.length >= 3 ? parts.slice(2).join('---').trim() : '';
      const meta = parseFrontmatter(frontmatterRaw);

      return { meta, path: postPath, body };
    }
  }

  return null;
};
