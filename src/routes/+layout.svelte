<script lang="ts">
	import '../app.pcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
	import { Alert } from 'flowbite-svelte';
</script>

<Navbar  >
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Costs Management</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/costs">Costs</NavLi>
    <NavLi href="/costs/new">New</NavLi>
    <NavLi href="/costs/upload">Upload</NavLi>
  </NavUl>
</Navbar>

<slot />
