import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app-donera.svelte-dq3p23.svelte-dq3p23{text-align:center}h1.svelte-dq3p23.svelte-dq3p23{margin:0 0 0.5rem;font-size:1.75rem}.donera-lead.svelte-dq3p23.svelte-dq3p23{margin:0 0 1rem;max-width:22rem;margin-left:auto;margin-right:auto;color:var(--app-text-muted, #3d5247);font-size:1.05rem;line-height:1.5}.donera-figure.svelte-dq3p23.svelte-dq3p23{margin:0 auto 1.25rem;max-width:min(100%, 320px)}.donera-figure.svelte-dq3p23 img.svelte-dq3p23{width:100%;height:auto;border-radius:var(--app-radius-sm, 12px);border:1px solid var(--app-border, rgba(20, 34, 26, 0.12));box-shadow:var(--app-shadow, 0 4px 24px rgba(20, 34, 26, 0.08))}.donera-cta.svelte-dq3p23.svelte-dq3p23{display:inline-flex;justify-content:center;align-items:center;width:100%;max-width:22rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1huexch_START -->${$$result.title = `<title>APP | DONERA</title>`, ""}<!-- HEAD_svelte-1huexch_END -->`, ""} <main class="app-page app-donera svelte-dq3p23" data-svelte-h="svelte-x9ua6p"><h1 class="svelte-dq3p23">Donera</h1> <p class="donera-lead svelte-dq3p23">Skanna QR-koden med Swish eller använd knappen nedan.</p> <figure class="donera-figure svelte-dq3p23"><img src="/swish-QR-large.png" alt="Swish QR-kod för donation" width="500" height="500" class="svelte-dq3p23"></figure> <a href="https://app.swish.nu/1/p/sw/?sw=1235019146&msg=&src=qr" target="_blank" rel="noopener noreferrer" class="button green10 donera-cta svelte-dq3p23">Öppna Swish och donera</a> </main>`;
});
export {
  Page as default
};
