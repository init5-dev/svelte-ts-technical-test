import * as server from '../entries/pages/costs/new/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/costs/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/costs/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.N5nd3VHi.js","_app/immutable/chunks/scheduler.bX6PUre-.js","_app/immutable/chunks/index.MJuC4Xhz.js","_app/immutable/chunks/each.B4xCykfO.js","_app/immutable/chunks/index.A5fOozpZ.js","_app/immutable/chunks/entry.rfhwLhrg.js","_app/immutable/chunks/index.qaMdkIhf.js","_app/immutable/chunks/stores.abm3qHiY.js"];
export const stylesheets = ["_app/immutable/assets/6.uqf8j4cC.css"];
export const fonts = [];
