<script lang="ts">

	import { Button, Fileupload, Label } from "flowbite-svelte";
	import type { PageData } from '../../routes/$types';
	import { superForm } from "sveltekit-superforms/client";

	export let data: PageData;

	const {form} = superForm(Object(data).form);
</script>

<form method="POST" enctype="multipart/form-data">
	<Label class="space-y-2 mb-2">
		<span>Upload file</span>
		<Fileupload bind:value={$form.value} />
	</Label>
	<Button type="submit">Upload!</Button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		margin-bottom: 20px;
	}
</style>
