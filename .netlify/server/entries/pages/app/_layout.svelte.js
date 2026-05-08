import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { t as textSize, i as isLarger, a as appTheme$1 } from "../../../chunks/index5.js";
import { p as page } from "../../../chunks/stores.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const appTheme = "";
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--text-size:100%}.wrapper.svelte-4h05w8.svelte-4h05w8{min-height:100vh;height:auto;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding-bottom:calc(var(--bottom-nav-height, 4.75rem) + env(safe-area-inset-bottom, 0px))}.text-150.svelte-4h05w8.svelte-4h05w8{font-size:var(--text-size)}.noInstall.svelte-4h05w8.svelte-4h05w8{justify-content:center;text-align:center;display:flex;font-size:large}.noInstall.svelte-4h05w8 h3.svelte-4h05w8{text-align:center;display:block;margin-top:0}.app-install-lead.svelte-4h05w8.svelte-4h05w8{max-width:26rem;margin:0 auto 1rem;color:var(--app-text-muted, #3d5247);font-size:1.05rem;line-height:1.5}",
  map: null
};
function navActive(p, path) {
  if (p === "home")
    return path === "/app" || path === "/app/";
  if (p === "bonetider")
    return path.startsWith("/app/bonetider");
  if (p === "nyheter")
    return path.startsWith("/app/nyheter");
  if (p === "mer")
    return path.startsWith("/app/mer") || path.startsWith("/app/kontakt") || path.startsWith("/app/donera") || path.startsWith("/app/installningar");
  return false;
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let textSizeValue = 100;
  let isLargerValue = false;
  let theme = "light";
  textSize.subscribe((value) => {
    textSizeValue = value;
  });
  isLarger.subscribe((value) => {
    isLargerValue = value;
  });
  appTheme$1.subscribe((value) => {
    theme = value;
  });
  afterNavigate(() => {
    return;
  });
  $$result.css.add(css);
  pathname = $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-7on2a8_START --><link rel="preload" as="image" href="/mosque.png"><link rel="preload" as="image" href="/prayermosque.png"><link rel="preload" as="image" href="/mosquenews.png"><link rel="preload" as="image" href="/swish-QR-large.png"><!-- HEAD_svelte-7on2a8_END -->`, ""} ${`<div class="${["wrapper app-shell svelte-4h05w8", isLargerValue ? "text-150" : ""].join(" ").trim()}"${add_attribute("data-theme", theme, 0)} style="${"--text-size: " + escape(textSizeValue, true) + "%; --bottom-nav-height: 4.75rem;"}">${slots.default ? slots.default({}) : ``} <nav class="app-bottom-nav" aria-label="Huvudnavigering"><a data-sveltekit-preload-data="viewport" class="${["app-nav-item", navActive("home", pathname) ? "active" : ""].join(" ").trim()}" href="/app"${add_attribute("aria-current", navActive("home", pathname) ? "page" : void 0, 0)}><i data-svelte-h="svelte-1bexogl">home</i> <span data-svelte-h="svelte-1akddts">Hem</span></a> <a data-sveltekit-preload-data="viewport" class="${["app-nav-item", navActive("bonetider", pathname) ? "active" : ""].join(" ").trim()}" href="/app/bonetider"${add_attribute("aria-current", navActive("bonetider", pathname) ? "page" : void 0, 0)}><i data-svelte-h="svelte-1k5bbda">mosque</i> <span data-svelte-h="svelte-3m8ugh">Bönetider</span></a> <a data-sveltekit-preload-data="viewport" class="${["app-nav-item", navActive("nyheter", pathname) ? "active" : ""].join(" ").trim()}" href="/app/nyheter"${add_attribute("aria-current", navActive("nyheter", pathname) ? "page" : void 0, 0)}><i data-svelte-h="svelte-14vr29h">newspaper</i> <span data-svelte-h="svelte-14qubkp">Nyheter</span></a> <a data-sveltekit-preload-data="viewport" class="${["app-nav-item", navActive("mer", pathname) ? "active" : ""].join(" ").trim()}" href="/app/mer"${add_attribute("aria-current", navActive("mer", pathname) ? "page" : void 0, 0)}><i data-svelte-h="svelte-dzollf">more_vert</i> <span data-svelte-h="svelte-w66j8i">Mer</span></a></nav></div>`}`;
});
export {
  Layout as default
};
