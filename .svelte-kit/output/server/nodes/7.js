import * as server from '../entries/pages/costs/upload/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/costs/upload/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/costs/upload/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.JhwfXNBW.js","_app/immutable/chunks/scheduler.bX6PUre-.js","_app/immutable/chunks/index.MJuC4Xhz.js","_app/immutable/chunks/Button.lUIneanf.js","_app/immutable/chunks/bundle-mjs.gIOm2IFG.js","_app/immutable/chunks/index.A5fOozpZ.js","_app/immutable/chunks/entry.rfhwLhrg.js","_app/immutable/chunks/index.qaMdkIhf.js","_app/immutable/chunks/stores.abm3qHiY.js"];
export const stylesheets = ["_app/immutable/assets/7.Uon8J79Q.css"];
export const fonts = [];
