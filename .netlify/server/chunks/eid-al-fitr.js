import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "layout": "nyheter",
  "title": "Eid Al Fitr",
  "created": "Admin",
  "date": "2025-09-29T23:29:00.000Z"
};
const Eid_al_fitr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-bh38r1"><strong>Eid Mubarak!</strong></p> <p data-svelte-h="svelte-166zbz5">Imorgon blir det Eid al-Fitr i A-hallen i Söderhamn kl. 08:00. Glöm inte att ta med era bönemattor.</p> <p data-svelte-h="svelte-rfh76m"><strong>عِيد مُبَارَك</strong></p> <p data-svelte-h="svelte-kl85j8">غدًا سيكون عيد الفطر في قاعة أ في سودرهامن الساعة 08:00. لا تنسوا إحضار سجاجيد الصلاة.</p>`;
});
export {
  Eid_al_fitr as default,
  metadata
};
