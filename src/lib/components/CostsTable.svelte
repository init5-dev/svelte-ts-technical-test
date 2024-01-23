<script lang="ts">
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
	import type { Cost } from '$lib/models/Cost';
	import type { TableData } from "$lib/types";

	export let data: TableData;
	let costs: Cost[] = [];

	for (const e of data?.feed?.costs) {
			costs.push(e);
		}

	function formatDate(date: Date) {
		return date.toLocaleDateString();
	}
</script>

<Table>
	<TableHead>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Amount</TableHeadCell>
			<TableHeadCell>Date</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each costs as cost (cost.id)}
			<TableBodyRow>
				<TableBodyCell>{cost.category}</TableBodyCell>
				<TableBodyCell>{cost.amount}</TableBodyCell>
				<TableBodyCell>{formatDate(cost.date)}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
