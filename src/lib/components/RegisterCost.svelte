<script lang="ts">
  import type {Cost, Category} from "$lib/models/Cost"
	import type { PageData } from "../../routes/$types";

	export let data: PageData

  let cost: Cost = {
    amount: 0,
    date: new Date(),
  };

	let selectedCategory = ''

  async function handleSubmit() {
    console.log('Cost data:', cost);
  }
</script>

<form method="post" enctype="multipart/form-data">
  <div>
    <label for="category">Category:</label>
    <select name='category' bind:value={selectedCategory}>
			<option value="">Select a category</option>
			{#each data.feed as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
  </div>

  <div>
    <label for="amount">Amount:</label>
    <input type="number" name="amount" bind:value={cost.amount} required />
  </div>

  <div>
    <label for="date">Date:</label>
    <input type="date" name="date" bind:value={cost.date} required />
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
