

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/kontakt/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.fd8f005c.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js"];
export const stylesheets = ["_app/immutable/assets/9.28fce19d.css"];
export const fonts = [];
