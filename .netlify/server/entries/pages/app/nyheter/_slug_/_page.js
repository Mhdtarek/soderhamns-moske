const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../bönetider.md": () => import("../../../../../chunks/bönetider.js"), "../eid-al-fitr-2026.md": () => import("../../../../../chunks/eid-al-fitr-2026.js"), "../eid-al-fitr.md": () => import("../../../../../chunks/eid-al-fitr.js"), "../föreläsning.md": () => import("../../../../../chunks/föreläsning.js"), "../koranskola.md": () => import("../../../../../chunks/koranskola.js"), "../nu-finns-det-inställningar.md": () => import("../../../../../chunks/nu-finns-det-inställningar.js") }), `../${params.slug}.md`);
  const { title, date, created } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date,
    created
  };
}
export {
  load
};
