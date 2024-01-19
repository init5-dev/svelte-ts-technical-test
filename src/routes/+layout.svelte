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

<style lang="postcss">
	nav {
		background-color: #f0f0f0;
		padding: 10px;
		margin-bottom: 25px;
	}

	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav li {
		display: inline-block;
		margin-right: 20px;
	}

	nav a {
		text-decoration: none;
		color: #000;
		padding: 5px 10px;
	}

	a {
		text-decoration: none;
		color: #000;
		padding: 5px 10px;
	}

	a:hover {
		color: #007bff;
	}
</style>
