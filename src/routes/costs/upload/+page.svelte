<script lang="ts">
	import UploadFile from '$lib/components/UploadFile.svelte';
	import type { UploadActionData } from "$lib/types";

	export let form: UploadActionData;
	export let value: string;
</script>

<h1>Upload cost</h1>
<UploadFile {form} {value}/>

<style>
	h1 {
		width: 100vw;
		font-size: 3rem;
		text-align: center;
	}
</style>
