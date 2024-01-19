import { c as create_ssr_component, j as each, h as escape, f as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: "table.svelte-15vuo09{border-collapse:collapse;width:100%;margin-bottom:20px}th.svelte-15vuo09,td.svelte-15vuo09{padding:10px;text-align:left;border:1px solid #ddd}th.svelte-15vuo09{background-color:#f2f2f2}a.svelte-15vuo09{text-decoration:none;color:#0099ff;padding:5px 10px}a.svelte-15vuo09:hover{color:#007bff;text-decoration:underline}",
  map: null
};
function formatDate(date) {
  return date.toLocaleDateString();
}
const CostsTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let costs = [];
  if ("feed" in data) {
    for (const e of Object(data.feed)) {
      costs.push(e);
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<table class="svelte-15vuo09"><thead data-svelte-h="svelte-64zeyk"><tr><th class="svelte-15vuo09">Category</th> <th class="svelte-15vuo09">Amount</th> <th class="svelte-15vuo09">Date</th> <th class="svelte-15vuo09">File</th></tr></thead> <tbody>${each(costs, (cost) => {
    return `<tr><td class="svelte-15vuo09">${escape(cost.category)}</td> <td class="svelte-15vuo09">${escape(cost.amount)}</td> <td class="svelte-15vuo09">${escape(formatDate(cost.date))}</td> <td class="svelte-15vuo09">${cost.file ? `<a${add_attribute("href", cost.file, 0)} target="_blank" rel="noopener noreferrer" class="svelte-15vuo09">View File</a>` : ``}</td> </tr>`;
  })}</tbody> </table>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(CostsTable, "CostsTable").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
