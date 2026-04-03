import { c as create_ssr_component, a as subscribe } from "../../../../chunks/ssr.js";
import { a as appTheme } from "../../../../chunks/index5.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app-settings.svelte-1ln7k3x.svelte-1ln7k3x{padding-top:1.25rem}h1.svelte-1ln7k3x.svelte-1ln7k3x{text-align:center;margin:0 0 1.25rem;font-size:1.75rem}h2.svelte-1ln7k3x.svelte-1ln7k3x{font-size:1.125rem;margin:0 0 0.35rem}.copy.svelte-1ln7k3x p.svelte-1ln7k3x{margin:0;font-size:1rem;color:var(--app-text-muted, #3d5247);line-height:1.45}.settings-on.svelte-1ln7k3x.svelte-1ln7k3x{margin:1rem 0 0;text-align:center;font-weight:600;color:var(--app-accent, #1b6b4a);font-size:1.05rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $appTheme, $$unsubscribe_appTheme;
  $$unsubscribe_appTheme = subscribe(appTheme, (value) => $appTheme = value);
  $$result.css.add(css);
  $$unsubscribe_appTheme();
  return `${$$result.head += `<!-- HEAD_svelte-u4yfuv_START -->${$$result.title = `<title>APP | INSTÄLLNINGAR</title>`, ""}<!-- HEAD_svelte-u4yfuv_END -->`, ""} <main class="app-page app-settings svelte-1ln7k3x"><h1 class="svelte-1ln7k3x" data-svelte-h="svelte-17tfin1">Inställningar</h1> ${``} <div class="app-setting-row"><div class="copy svelte-1ln7k3x" data-svelte-h="svelte-kxtpsb"><h2 class="svelte-1ln7k3x">Mörkt läge</h2> <p class="svelte-1ln7k3x">Mörk bakgrund och ljus text.</p></div> <label class="switch" aria-label="Mörkt läge"><input type="checkbox" ${$appTheme === "dark" ? "checked" : ""}> <span></span></label></div> ${``} </main>`;
});
export {
  Page as default
};
