

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d6d51c3b.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js"];
export const stylesheets = [];
export const fonts = [];
