import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-bk2tpz.svelte-bk2tpz{min-height:80vh;display:flex;align-items:center;justify-content:center;padding-top:1rem;padding-bottom:1rem}.app-contact-card.svelte-bk2tpz.svelte-bk2tpz{width:100%;max-width:26rem;padding:1.5rem 1.25rem 1.75rem;background:var(--app-surface);border:1px solid var(--app-border, rgba(20, 34, 26, 0.12));border-radius:var(--app-radius, 16px);box-shadow:var(--app-shadow, 0 4px 24px rgba(20, 34, 26, 0.08))}h1.svelte-bk2tpz.svelte-bk2tpz{margin:0 0 1.25rem;text-align:center;font-size:1.65rem}h2.svelte-bk2tpz.svelte-bk2tpz{margin:0 0 0.5rem;font-size:1.05rem;font-weight:700;color:var(--app-text-muted, #3d5247)}.app-contact-block.svelte-bk2tpz.svelte-bk2tpz{margin-bottom:1.25rem}.app-contact-phone.svelte-bk2tpz.svelte-bk2tpz{margin:0;font-size:1.35rem;font-weight:700}.app-contact-phone.svelte-bk2tpz a.svelte-bk2tpz{text-decoration:none;color:var(--app-accent, #1b6b4a)}.app-admin-link.svelte-bk2tpz.svelte-bk2tpz{display:block;text-align:center;margin-top:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1y31qv2_START -->${$$result.title = `<title>APP | KONTAKT</title>`, ""}<!-- HEAD_svelte-1y31qv2_END -->`, ""} <main class="app-page svelte-bk2tpz" data-svelte-h="svelte-cxcwg7"><article class="app-contact-card svelte-bk2tpz"><h1 class="svelte-bk2tpz">Kontakta oss</h1> <section class="app-contact-block svelte-bk2tpz"><h2 class="svelte-bk2tpz">Nyheter</h2> <p class="app-contact-phone svelte-bk2tpz"><a href="tel:+46737403213" class="svelte-bk2tpz">073-740 32 13</a></p></section> <section class="app-contact-block svelte-bk2tpz"><h2 class="svelte-bk2tpz">App och teknik</h2> <p class="app-contact-phone svelte-bk2tpz"><a href="tel:+46737461676" class="svelte-bk2tpz">073-746 16 76</a></p></section> <a class="button green10 app-admin-link svelte-bk2tpz" href="/admin">Adminpanel</a></article> </main>`;
});
export {
  Page as default
};
