

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e5626f88.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js","_app/immutable/chunks/stores.12d31390.js","_app/immutable/chunks/singletons.db242351.js","_app/immutable/chunks/index.70414d7a.js"];
export const stylesheets = [];
export const fonts = [];
