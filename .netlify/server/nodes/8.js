

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/installningar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.a36a60ee.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js","_app/immutable/chunks/index.535876fa.js","_app/immutable/chunks/index.70414d7a.js"];
export const stylesheets = ["_app/immutable/assets/8.db8d8496.css"];
export const fonts = [];
