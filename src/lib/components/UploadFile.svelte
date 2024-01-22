<script lang="ts">
	import { Button, Fileupload, Label } from "flowbite-svelte";
	import type { PageData } from "../../routes/$types";

	export let data: PageData;
	export let value;
</script>

<form method="POST" enctype="multipart/form-data">
	<Label class="space-y-2 mb-2">
		<span>Upload file</span>
		<Fileupload name='file' bind:value={value}/>
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
