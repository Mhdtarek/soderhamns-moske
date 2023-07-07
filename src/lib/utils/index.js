export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("../../routes/app/nyheter/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  if (iterablePostFiles.length > 0) {
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        // @ts-ignore
        const { metadata } = await resolver();
        const postPath = path.slice(12, -3);

        return {
          meta: metadata,
          path: postPath,
        };
      })
    );
    allPosts.sort((a, b) => {
      // Perform sorting based on the meta.date property
      const dateA = new Date(a.meta.date);
      const dateB = new Date(b.meta.date);

      // Sort in descending order (newest date first)
      return dateB - dateA;
    });

    return allPosts;
  }

  // Return an empty array if there are no posts
  return [];
};
