import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { P as PrayerTimes } from "../../../../chunks/PrayerTimes.js";
import { t as textSize, i as isLarger } from "../../../../chunks/index5.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.month-heading.svelte-19zhnjk.svelte-19zhnjk{text-align:center;display:block;margin:1.5rem 0 0.75rem;font-size:1.125rem;font-weight:700;color:var(--app-text-muted, #3d5247)}.prayer-month-card.svelte-19zhnjk.svelte-19zhnjk{margin-bottom:1rem}.tabs.svelte-19zhnjk>a.svelte-19zhnjk,.tabs.svelte-19zhnjk>a.svelte-19zhnjk:visited,.tabs.svelte-19zhnjk>a.svelte-19zhnjk:hover,.tabs.svelte-19zhnjk>a.svelte-19zhnjk:focus{color:inherit;text-decoration:none}.larger.svelte-19zhnjk.svelte-19zhnjk{font-size:var(--text-size)}.month-skeleton.svelte-19zhnjk.svelte-19zhnjk{padding:12px 16px 16px 16px;display:grid;gap:10px}.skeleton.svelte-19zhnjk.svelte-19zhnjk{display:inline-block;background:rgba(20, 23, 17, 0.08);border-radius:10px}.skeleton-text.svelte-19zhnjk.svelte-19zhnjk{height:14px}.app-shell[data-theme="dark"] .skeleton.svelte-19zhnjk.svelte-19zhnjk{background:rgba(233, 239, 233, 0.12)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  textSize.subscribe((value) => {
  });
  isLarger.subscribe((value) => {
  });
  let monthSentinel = null;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-12csnbb_START -->${$$result.title = `<title>APP | BÖNETIDER</title>`, ""}<!-- HEAD_svelte-12csnbb_END -->`, ""} <main class="responsive app-page app-page-wide" id="top"><article class="no-padding border primary-container app-hero" data-svelte-h="svelte-g3t0ia"><img class="responsive medium" src="/prayermosque.png" alt="Moské"> <div class="absolute bottom left right padding bottom-shadow white-text app-hero-bar"><nav><h5 class="app-hero-title">Bönetider</h5> <div class="max"></div> <a href="/app/kontakt" class="circle transparent app-hero-icon" aria-label="Kontakt"><i>phone</i></a></nav></div></article> <div class="tabs center-align min svelte-19zhnjk"><a href="#page1" data-ui="#page1" class="svelte-19zhnjk" data-svelte-h="svelte-f3xonq">Bönetider igår</a> <a href="#page2" data-ui="#page2" class="active svelte-19zhnjk" data-svelte-h="svelte-17069q5">Bönetider idag</a> <a href="#page3" data-ui="#page3" class="svelte-19zhnjk" data-svelte-h="svelte-5iyick">Bönetider imorgon</a></div> <div class="page" id="page1">${validate_component(PrayerTimes, "PrayerTimes").$$render(
    $$result,
    {
      prayerTimes: {}
    },
    {},
    {}
  )}</div> <div class="page active" id="page2">${validate_component(PrayerTimes, "PrayerTimes").$$render(
    $$result,
    {
      prayerTimes: {}
    },
    {},
    {}
  )}</div> <div class="page" id="page3">${validate_component(PrayerTimes, "PrayerTimes").$$render(
    $$result,
    {
      prayerTimes: {}
    },
    {},
    {}
  )}</div> <div style="height: 1px;"${add_attribute("this", monthSentinel, 0)}></div> <h4 class="month-heading svelte-19zhnjk" data-svelte-h="svelte-mwys1a">Månadens bönetider</h4> <article class="card app-card prayer-month-card svelte-19zhnjk" style="overflow: hidden;">${`<div class="month-skeleton svelte-19zhnjk" data-svelte-h="svelte-3tdns2"><div class="skeleton skeleton-text svelte-19zhnjk" style="width: 40%"></div> <div class="skeleton skeleton-text svelte-19zhnjk" style="width: 55%"></div> <div class="skeleton skeleton-text svelte-19zhnjk" style="width: 50%"></div> <div class="skeleton skeleton-text svelte-19zhnjk" style="width: 60%"></div></div>`}</article> </main>`;
});
export {
  Page as default
};
