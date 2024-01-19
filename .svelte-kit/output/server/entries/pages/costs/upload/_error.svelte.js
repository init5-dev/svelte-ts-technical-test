import { c as create_ssr_component, i as subscribe, h as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const css = {
  code: "div.svelte-ge0drd{display:flex;flex-direction:column;gap:10px;align-items:center;justify-content:center}.error.svelte-ge0drd{width:256px;padding:5%;background-color:#f2f2f2;color:red;border:1px solid red;font-weight:bold;text-align:center}a.svelte-ge0drd{text-decoration:none;color:#0099ff;padding:5px 10px}a.svelte-ge0drd:hover{color:#007bff;text-decoration:underline}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="svelte-ge0drd"><div class="error svelte-ge0drd">${escape($page?.error?.message)}</div> <a href="/costs/upload" class="svelte-ge0drd" data-svelte-h="svelte-cbh94d">Retry</a> </div>`;
});
export {
  Error as default
};
