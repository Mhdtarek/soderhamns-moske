

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/donera/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.f7704846.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js"];
export const stylesheets = ["_app/immutable/assets/7.506398fd.css"];
export const fonts = [];
