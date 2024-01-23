<script lang="ts">
	import CostsTable from '$lib/components/CostsTable.svelte';
	import { Modal, Button } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	const status = data?.feed?.status;
	let defaultModal = false;
	let endOfTable: HTMLDivElement | null = null;

	onMount(async () => {
		console.log('STATUS:', endOfTable);

		if (status === 'updated') {
			if (endOfTable) {
				endOfTable.scrollIntoView({
					behavior: 'smooth'
				});
			}

			defaultModal = true;
		}
	});
</script>

<CostsTable {data} />
<div id="end-of-table" bind:this={endOfTable}></div>
<Modal title="Success!" bind:open={defaultModal} autoclose>
	<p>New cost added.</p>
  <Button>Got it!</Button>
</Modal>
