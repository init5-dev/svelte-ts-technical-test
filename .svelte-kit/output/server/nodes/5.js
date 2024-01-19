import * as server from '../entries/pages/costs/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/costs/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/costs/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.bc-H1G9C.js","_app/immutable/chunks/scheduler.bX6PUre-.js","_app/immutable/chunks/index.MJuC4Xhz.js","_app/immutable/chunks/each.B4xCykfO.js"];
export const stylesheets = ["_app/immutable/assets/5.Jtztr2X7.css"];
export const fonts = [];
