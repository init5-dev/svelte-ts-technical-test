<form method="post" enctype="multipart/form-data">
	<div>
		<label for="file">Upload file</label>
		<input type="file" id="file" name="fileToUpload" accept=".json" required />
	</div>

	<button type="submit">Submit</button>
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

	input[type='file'] {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	input[type='file']::-webkit-file-upload-button {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;

		background-color: #f0f0f0; 
		color: #000; 
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
