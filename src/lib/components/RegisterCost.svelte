<script lang="ts">
	import { Button, Input, Label, Select } from 'flowbite-svelte';
	import type { PageData } from '../../routes/$types';
	import { superForm } from 'sveltekit-superforms/client';
	import type { UploadActionData } from '$lib/types';

	export let formActionData: UploadActionData;
	export let data: PageData;

	const { form, constraints, errors } = superForm(Object(data).form);

	const categories = $form.categories.map((category: string) => ({
		value: category,
		name: category
	}));
</script>

<form method="POST">
	<div class="form-section">
		<Label for="category">Category:</Label>
		<Select
			required
			name="category"
			items={categories}
			bind:value={$form.category}
			{...$constraints.category}
		/>
	</div>

	<div class="form-section">
		<Label for="amount">Amount:</Label>
		<Input
			required
			type="number"
			name="amount"
			aria-invalid={$errors.amount ? 'true' : undefined}
			bind:value={$form.amount}
			{...$constraints.amount}
		/>
	</div>

	<div class="form-section">
		<Label for="date">Date:</Label>
		<Input required type="date" name="date" bind:value={$form.date} {...$constraints.date} />
	</div>

	<Button type="submit">Register Cost</Button>

	<div class="form-section">
		{#if formActionData?.error}
			<span class="alert">{formActionData?.error.message}</span>
		{/if}
	</div>
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

	.form-section {
		@apply flex w-96 flex-col items-start justify-start gap-2;
	}
</style>
