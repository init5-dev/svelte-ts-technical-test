<script lang="ts">
	import { Button, Fileupload, Helper, Label } from 'flowbite-svelte';
	import type { UploadActionData } from "$lib/types";

	export let value: string;
	export let form: UploadActionData;

	console.log('DATA:', form);

	const handleClick = () => {
		form = { error: null}
	}
</script>

<form method="POST" enctype="multipart/form-data">
	<Label class="mb-2 space-y-2">
		<span>Upload file</span>
		<Fileupload required name="file" bind:value accept=".json, .cost" on:click = {handleClick}/>
		<Helper>COST or JSON</Helper>
		{#if form?.error}
		<Label class="alert" role="alert">{form.error.message}</Label>
		{/if}
		
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
