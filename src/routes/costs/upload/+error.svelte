<script>
	import { page } from '$app/stores';
</script>

<div>
	<div class="error">
		{$page?.error?.message}
	</div>
	<a href="/costs/upload">Retry</a>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	.error {
		width: 256px;
		padding: 5%;
		background-color: #f2f2f2;
		color: red;
		border: 1px solid red;
		font-weight: bold;
		text-align: center;
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
