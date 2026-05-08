import * as universal from '../entries/pages/app/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/app/+layout.js";
export const imports = ["_app/immutable/nodes/2.4e08030c.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js","_app/immutable/chunks/index.535876fa.js","_app/immutable/chunks/index.70414d7a.js","_app/immutable/chunks/stores.12d31390.js","_app/immutable/chunks/singletons.db242351.js"];
export const stylesheets = ["_app/immutable/assets/2.ea953456.css"];
export const fonts = [];
