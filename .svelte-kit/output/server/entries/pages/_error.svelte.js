import { c as create_ssr_component, i as subscribe, h as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const css = {
  code: "div.svelte-1hom5ut{display:flex;flex-direction:column;gap:10px;align-items:center;justify-content:center}.error.svelte-1hom5ut{width:256px;padding:5%;background-color:#f2f2f2;color:red;border:1px solid red;font-weight:bold;text-align:center}a.svelte-1hom5ut{text-decoration:none;color:#0099ff;padding:5px 10px}a.svelte-1hom5ut:hover{color:#007bff;text-decoration:underline}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="svelte-1hom5ut"><div class="error svelte-1hom5ut">${escape($page?.error?.message)}</div> <a href="/costs" class="svelte-1hom5ut" data-svelte-h="svelte-5ww24d">Retry</a> </div>`;
});
export {
  Error as default
};
