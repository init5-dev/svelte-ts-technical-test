import { c as create_ssr_component, i as subscribe, j as each, f as add_attribute, h as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { s as superForm } from "../../../../chunks/index3.js";
const css = {
  code: "form.svelte-1rfkxzp{display:flex;flex-direction:column;align-items:center;padding:20px;margin-bottom:20px}div.svelte-1rfkxzp{margin-bottom:10px}label.svelte-1rfkxzp{margin-bottom:5px;font-weight:bold}input.svelte-1rfkxzp{padding:10px;border:1px solid #ccc;border-radius:5px}button[type='submit'].svelte-1rfkxzp{background-color:#007bff;color:#fff;padding:10px 20px;border:none;border-radius:5px;cursor:pointer}button[type='submit'].svelte-1rfkxzp:hover{background-color:#0069d9}",
  map: null
};
const RegisterCost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const { form } = superForm(Object(data).form);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_form();
  return `<form method="POST" class="svelte-1rfkxzp"><div class="svelte-1rfkxzp"><label for="category" class="svelte-1rfkxzp" data-svelte-h="svelte-1qmhjiw">Category:</label> <select name="category"><option value="" data-svelte-h="svelte-15swqsp">Select a category</option>${each($form.categories, (category) => {
    return `<option${add_attribute("value", category, 0)}>${escape(category)}</option>`;
  })}</select></div> <div class="svelte-1rfkxzp"><label for="amount" class="svelte-1rfkxzp" data-svelte-h="svelte-16ot9eo">Amount:</label> <input type="number" name="amount" required class="svelte-1rfkxzp"${add_attribute("value", $form.amount, 0)}></div> <div class="svelte-1rfkxzp"><label for="date" class="svelte-1rfkxzp" data-svelte-h="svelte-1mfsj80">Date:</label> <input type="date" name="date" required class="svelte-1rfkxzp"${add_attribute("value", $form.date, 0)}></div> <button type="submit" class="svelte-1rfkxzp" data-svelte-h="svelte-1ronjjx">Register Cost</button> </form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(RegisterCost, "RegisterCost").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
