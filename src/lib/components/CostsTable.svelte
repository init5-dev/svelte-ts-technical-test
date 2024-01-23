<script lang="ts">
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

<table>
	<thead>
		<tr>
			<th>Category</th>
			<th>Amount</th>
			<th>Date</th>
		</tr>
	</thead>
	<tbody>
		{#each costs as cost (cost.id)}
			<tr>
				<td>{cost.category}</td>
				<td>{cost.amount}</td>
				<td>{formatDate(cost.date)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 20px;
	}

	th,
	td {
		padding: 10px;
		text-align: left;
		border: 1px solid #ddd;
	}

	th {
		background-color: #f2f2f2;
	}
</style>
