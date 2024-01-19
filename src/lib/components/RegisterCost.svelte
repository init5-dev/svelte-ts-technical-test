<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	const {form} = superForm(Object(data).form);
</script>

<form method="POST">
	<div>
		<label for="category">Category:</label>
		<select name="category" bind:value={$form.category}>
			<option value="">Select a category</option>
			{#each $form.categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div> 

	<div>
		<label for="amount">Amount:</label>
		<input type="number" name="amount" bind:value={$form.amount} required />
	</div>

	<div>
		<label for="date">Date:</label>
		<input type="date" name="date" bind:value={$form.date} required />
	</div>

	<button type="submit">Register Cost</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		margin-bottom: 20px;
	}

	div {
		margin-bottom: 10px;
	}

	label {
		margin-bottom: 5px;
		font-weight: bold;
	}

	input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button[type='submit'] {
		background-color: #007bff;
		color: #fff;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button[type='submit']:hover {
		background-color: #0069d9;
	}
</style>
