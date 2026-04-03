import * as universal from '../entries/pages/app/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/app/+page.js";
export const imports = ["_app/immutable/nodes/5.bb160246.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js","_app/immutable/chunks/PrayerTimes.41b0edfa.js","_app/immutable/chunks/index.535876fa.js","_app/immutable/chunks/index.70414d7a.js","_app/immutable/chunks/stores.12d31390.js","_app/immutable/chunks/singletons.db242351.js"];
export const stylesheets = ["_app/immutable/assets/5.949054c7.css","_app/immutable/assets/PrayerTimes.d93143f4.css"];
export const fonts = [];
