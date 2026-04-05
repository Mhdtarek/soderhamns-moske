import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mer-title.svelte-1en9lk4.svelte-1en9lk4{font-size:1.75rem;margin:0 0 0.35rem;text-align:center}.mer-lead.svelte-1en9lk4.svelte-1en9lk4{text-align:center;color:var(--app-text-muted, #3d5247);margin:0 0 1.25rem;font-size:1.05rem}.mer-card.svelte-1en9lk4.svelte-1en9lk4{margin-bottom:0.75rem}.mer-row.svelte-1en9lk4.svelte-1en9lk4{display:flex;align-items:center;gap:0.75rem;font-size:1.2rem;font-weight:700}.mer-row.svelte-1en9lk4 i.svelte-1en9lk4{font-size:1.5rem;opacity:0.95}.mer-hint.svelte-1en9lk4.svelte-1en9lk4{display:block;margin-top:0.35rem;font-size:0.95rem;font-weight:500;color:var(--app-text-muted, #3d5247)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="responsive app-page" data-svelte-h="svelte-4z5prz"><h1 class="mer-title svelte-1en9lk4">Mer</h1> <p class="mer-lead svelte-1en9lk4">Kontakt och stöd till föreningen.</p> <a data-sveltekit-preload-data="viewport" class="app-link-card mer-card svelte-1en9lk4" href="/app/kontakt"><span class="mer-row svelte-1en9lk4"><i class="svelte-1en9lk4">phone</i> <span>Kontakt</span></span> <span class="mer-hint svelte-1en9lk4">Telefon och frågor</span></a> <a data-sveltekit-preload-data="viewport" class="app-link-card mer-card svelte-1en9lk4" href="/app/donera"><span class="mer-row svelte-1en9lk4"><i class="svelte-1en9lk4">volunteer_activism</i> <span>Donera</span></span> <span class="mer-hint svelte-1en9lk4">Swish och bidrag</span></a> <a data-sveltekit-preload-data="viewport" class="app-link-card mer-card svelte-1en9lk4" href="/app/installningar"><span class="mer-row svelte-1en9lk4"><i class="svelte-1en9lk4">tune</i> <span>Inställningar</span></span> <span class="mer-hint svelte-1en9lk4">Mörkt läge m.m.</span></a> </main>`;
});
export {
  Page as default
};
