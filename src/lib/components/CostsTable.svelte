<script lang="ts">
	import type { PageData } from '../../routes/$types';

	export let data: PageData;

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
			<th>File</th>
		</tr>
	</thead>
	<tbody>
		{#each data.feed as cost (cost.id)}
			<tr>
				<td>{cost.category}</td>
				<td>{cost.amount}</td>
				<td>{formatDate(cost.date)}</td>
				<td>
					{#if cost.file}
						<a href={cost.file} target="_blank" rel="noopener noreferrer">View File</a>
					{/if}
				</td>
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

  a {
		text-decoration: none;
		color: #0099ff;
		padding: 5px 10px;
	}

  a:hover {
		color: #007bff;
    text-decoration: underline;
	}

</style>
