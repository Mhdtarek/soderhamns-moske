

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/nyheter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.dedb4b14.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/11.87b58fe2.css"];
export const fonts = [];
