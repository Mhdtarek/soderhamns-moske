import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app-news-grid.svelte-1evnu5n{margin-top:0.5rem}.app-news-item.svelte-1evnu5n{margin-top:0}.app-empty.svelte-1evnu5n{text-align:center;color:var(--app-text-muted, #3d5247);font-size:1.05rem;padding:1rem}",
  map: null
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    timeZone: "Europe/Stockholm"
  };
  return date.toLocaleString("sv-SE", options);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let posts = [];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13qr18f_START -->${$$result.title = `<title>APP | NYHETER</title>`, ""}<!-- HEAD_svelte-13qr18f_END -->`, ""} <main class="responsive app-page"><article class="no-padding border primary-container app-hero" data-svelte-h="svelte-15sw1o0"><img class="responsive medium" src="/mosquenews.png" alt=""> <div class="absolute bottom left right padding bottom-shadow white-text app-hero-bar"><nav><h5 class="app-hero-title">Nyheter</h5> <div class="max"></div> <a href="/app/kontakt" class="circle transparent app-hero-icon" aria-label="Kontakt"><i>phone</i></a></nav></div></article> <div class="grid large-space app-news-grid svelte-1evnu5n">${each(posts, (post) => {
    return `<article class="s6 app-news-item svelte-1evnu5n"><a${add_attribute("href", post.path, 0)} class="app-link-card"><h5>${escape(post.meta.title)}</h5> <p>${escape(formatDate(post.meta.date))}</p></a> </article>`;
  })} ${posts.length === 0 ? `<p class="app-empty svelte-1evnu5n" data-svelte-h="svelte-1raczg1">Inga nyheter just nu.</p>` : ``}</div> </main>`;
});
export {
  Page as default
};
