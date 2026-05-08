import { c as create_ssr_component, o as onDestroy, e as escape, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { P as PrayerTimes } from "../../../chunks/PrayerTimes.js";
const currentPrayerTime_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.next-prayer-card.svelte-1c2i3g1{margin-top:12px;padding:1.25rem 1.125rem 1.125rem;position:relative;overflow:hidden}.next-prayer-card.svelte-1c2i3g1::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(\n      90deg,\n      var(--app-gold, #a67c29),\n      var(--app-accent, #134632) 42%,\n      var(--app-accent, #134632) 58%,\n      var(--app-gold, #a67c29)\n    );pointer-events:none}.label.svelte-1c2i3g1{margin:0;position:absolute;top:10px;left:12px;font-size:0.8125rem;font-weight:700;color:var(--app-text-muted, #3d5247);text-transform:uppercase;letter-spacing:0.06em}.name.svelte-1c2i3g1{margin:1.5rem 0 0.25rem 0;font-family:var(--app-font-display, "Cormorant Garamond", serif);font-weight:600;font-size:clamp(1.65rem, 4.5vw, 2.15rem);line-height:1.2;text-align:center;color:var(--app-text, #14221a);letter-spacing:0.03em}.time.svelte-1c2i3g1{margin:0.75rem 0 0 0;font-size:1rem;text-align:center;font-weight:600;color:var(--app-text-muted, #3d5247)}.countdown.svelte-1c2i3g1{margin:0.25rem 0 0 0;font-weight:700;font-size:clamp(1.75rem, 5vw, 2.35rem);text-align:center;font-variant-numeric:tabular-nums;letter-spacing:0.04em;color:var(--app-accent, #1b6b4a)}.error.svelte-1c2i3g1,.loading.svelte-1c2i3g1{margin:1.5rem 0 0.25rem 0;font-size:1.05rem;text-align:center;color:var(--app-text-muted, #3d5247)}',
  map: null
};
const CurrentPrayerTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let countdownInterval;
  let refreshInterval;
  onDestroy(() => {
    clearInterval(countdownInterval);
    clearInterval(refreshInterval);
  });
  $$result.css.add(css$2);
  return `<article class="card app-card next-prayer-card svelte-1c2i3g1" aria-live="polite"><p class="label svelte-1c2i3g1" data-svelte-h="svelte-183ngal">Nästa bönetid</p> ${`${`<p class="loading svelte-1c2i3g1" data-svelte-h="svelte-6v3l9v">Laddar...</p>`}`} </article>`;
});
const DailyAyah_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.daily-ayah-card.svelte-upgxhd{margin-top:12px;padding:14px 14px 16px;overflow:hidden}.card-header.svelte-upgxhd{position:relative;min-height:20px;padding:0 6px 10px 6px}.header-label.svelte-upgxhd{margin:0;position:absolute;top:0;left:0;max-width:58%;font-family:var(--app-font-display, "Cormorant Garamond", serif);font-size:0.875rem;font-weight:600;opacity:0.88;letter-spacing:0.06em;color:var(--app-text-muted, #4a463c);line-height:1.25}.header-ref.svelte-upgxhd{margin:0;padding-left:0.5rem;font-size:0.82rem;line-height:1.3;text-align:right;color:var(--app-text-muted, #4a463c);opacity:0.92}.header-ref-num.svelte-upgxhd{font-variant-numeric:tabular-nums;white-space:nowrap;margin-left:0.25rem;font-weight:600;color:var(--app-accent, #1b6b4a)}.ayah-arabic.svelte-upgxhd{margin:0 0 12px;padding:12px 12px;font-family:"Amiri Quran", "Traditional Arabic", "Scheherazade New", serif;font-size:clamp(1.15rem, 3.4vw, 1.45rem);line-height:1.9;font-weight:400;color:var(--app-text, #1c1a14);border:none;background:var(--app-surface-muted, #ebe4d6);border-radius:var(--app-radius-sm, 8px)}.app-shell[data-theme="dark"] .ayah-arabic.svelte-upgxhd{background:var(--app-surface-muted)}.ayah-sv.svelte-upgxhd{margin:0 0 10px;padding:0 4px;font-size:1.02rem;line-height:1.65;color:var(--app-text, #1c1a14)}.ayah-attrib.svelte-upgxhd{margin:0;padding:0 4px;font-size:0.78rem;line-height:1.4;color:var(--app-text-muted, #4a463c)}',
  map: null
};
const DailyAyah = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ayah = null } = $$props;
  if ($$props.ayah === void 0 && $$bindings.ayah && ayah !== void 0)
    $$bindings.ayah(ayah);
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-h5c7j1_START --><link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap" rel="stylesheet"><!-- HEAD_svelte-h5c7j1_END -->`, ""} ${ayah?.arabicText ? `<article class="card app-card daily-ayah-card svelte-upgxhd" aria-labelledby="daily-ayah-label"><div class="card-header svelte-upgxhd"><p id="daily-ayah-label" class="header-label svelte-upgxhd" data-svelte-h="svelte-42dpg2">Dagens ayah</p> <p class="header-ref svelte-upgxhd" lang="sv">${escape(ayah.surahNameEn)} <span class="header-ref-num svelte-upgxhd">${escape(ayah.surahNumber)}:${escape(ayah.ayahInSurah)}</span></p></div> <blockquote class="ayah-arabic svelte-upgxhd" lang="ar" dir="rtl">${escape(ayah.arabicText)}</blockquote> <p class="ayah-sv svelte-upgxhd" lang="sv">${escape(ayah.swedishText)}</p> <p class="ayah-attrib svelte-upgxhd">Översättning: ${escape(ayah.translatorNote)}</p></article>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app-news-block.svelte-1vj3ga8{margin-top:0.5rem}",
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
  let { data } = $$props;
  let prayerTimes = data.todayPrayerTimes;
  let post = data.newsPost;
  let dailyAyah = data.dailyAyah ?? null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-aunhg1_START -->${$$result.title = `<title>APP | STARTSIDA</title>`, ""}<!-- HEAD_svelte-aunhg1_END -->`, ""} <main class="responsive app-page"><article class="no-padding border primary-container app-hero" data-svelte-h="svelte-mqttp6"><img class="responsive medium" src="/mosque.png" alt=""> <div class="absolute bottom left right padding bottom-shadow white-text app-hero-bar"><nav><h5 class="app-hero-title">Söderhamns Moské</h5> <div class="max"></div> <a href="/app/kontakt" class="circle transparent app-hero-icon" aria-label="Kontakt"><i>phone</i></a></nav></div></article> ${validate_component(CurrentPrayerTime, "CurrentPrayerTime").$$render($$result, {}, {}, {})} ${validate_component(DailyAyah, "DailyAyah").$$render($$result, { ayah: dailyAyah }, {}, {})} ${validate_component(PrayerTimes, "PrayerTimes").$$render($$result, { prayerTimes, header: "Dagens bönetider" }, {}, {})} ${post?.meta?.title ? `<section class="app-news-block svelte-1vj3ga8"><h3 class="app-section-title" data-svelte-h="svelte-1q1ltzi">Senaste nyhet</h3> <a${add_attribute("href", `${post.path}?from=hem`, 0)} class="app-link-card"><h5>${escape(post.meta.title)}</h5> <p>${escape(formatDate(post.meta.date))}</p></a></section>` : ``} </main>`;
});
export {
  Page as default
};
