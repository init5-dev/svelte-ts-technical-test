<script lang="ts">
	import RegisterCost from '$lib/components/RegisterCost.svelte';
	import type { PageData } from './$types';
	import type { UploadActionData } from '$lib/types';

	export let form: UploadActionData;
	export let data: PageData;
</script>

<RegisterCost {data} formActionData={form} />
