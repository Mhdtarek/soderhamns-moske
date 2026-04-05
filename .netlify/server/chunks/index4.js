const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "../../routes/app/nyheter/bönetider.md": () => import("./bönetider.js"), "../../routes/app/nyheter/eid-al-fitr-2026.md": () => import("./eid-al-fitr-2026.js"), "../../routes/app/nyheter/eid-al-fitr.md": () => import("./eid-al-fitr.js"), "../../routes/app/nyheter/föreläsning.md": () => import("./föreläsning.js"), "../../routes/app/nyheter/koranskola.md": () => import("./koranskola.js"), "../../routes/app/nyheter/nu-finns-det-inställningar.md": () => import("./nu-finns-det-inställningar.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  if (iterablePostFiles.length > 0) {
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const postPath = path.slice(12, -3);
        return {
          meta: metadata,
          path: postPath
        };
      })
    );
    allPosts.sort((a, b) => {
      const dateA = new Date(a.meta.date);
      const dateB = new Date(b.meta.date);
      return dateB - dateA;
    });
    return allPosts;
  }
  return [];
};
export {
  fetchMarkdownPosts as f
};
