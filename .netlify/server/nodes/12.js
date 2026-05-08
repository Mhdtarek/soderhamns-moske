import * as universal from '../entries/pages/app/nyheter/_slug_/_page.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/nyheter/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/app/nyheter/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/12.a37b748b.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js","_app/immutable/chunks/stores.12d31390.js","_app/immutable/chunks/singletons.db242351.js","_app/immutable/chunks/index.70414d7a.js"];
export const stylesheets = ["_app/immutable/assets/12.90252fc5.css"];
export const fonts = [];
