

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/installningar/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.fb03ff2b.js","_app/immutable/chunks/scheduler.c6c84ab1.js","_app/immutable/chunks/index.935cddb8.js"];
export const stylesheets = [];
export const fonts = [];
