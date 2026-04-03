import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component, m as missing_component } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app-article-meta.svelte-19oj6sd{margin-bottom:1rem}h1.svelte-19oj6sd{font-size:1.65rem;line-height:1.25;margin:0 0 0.75rem}.meta-line.svelte-19oj6sd{margin:0 0 0.35rem;font-size:1rem;color:var(--app-text-muted, #3d5247)}.back-link.svelte-19oj6sd{display:inline-flex;margin-top:1rem}.content h1{font-size:1.5rem !important;line-height:1.3}.content h2{font-size:1.25rem;margin-top:1.25rem}.content p{font-size:1.0625rem;line-height:1.65}",
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
  let backFromHome;
  let backHref;
  let backLabel;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  backFromHome = $page.url.searchParams.get("from") === "hem";
  backHref = backFromHome ? "/app" : "/app/nyheter";
  backLabel = backFromHome ? "← Tillbaka till hem" : "← Tillbaka till nyheter";
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1snxd9i_START -->${$$result.title = `<title>APP | NYHET: ${escape(data.title)}</title>`, ""}<!-- HEAD_svelte-1snxd9i_END -->`, ""} <main class="responsive app-page"><article class="app-article-meta svelte-19oj6sd"><h1 class="svelte-19oj6sd">${escape(data.title)}</h1> <p class="meta-line svelte-19oj6sd">Publicerad: ${escape(formatDate(data.date))}</p> ${data.created ? `<p class="meta-line svelte-19oj6sd">Skapad av: ${escape(data.created)}</p>` : ``} <a${add_attribute("href", backHref, 0)} class="button green10 back-link svelte-19oj6sd">${escape(backLabel)}</a></article> <div class="responsive app-prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, { class: "content" }, {}, {})}</div> </main>`;
});
export {
  Page as default
};
