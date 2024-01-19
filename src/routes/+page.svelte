<script>
	import { Alert, GradientButton } from 'flowbite-svelte'
  import {UploadSolid} from 'flowbite-svelte-icons'
</script>

<div class="flex flex-col items-center">
  <h1 class="text-3xl mb-6">Welcome!</h1>
	<div class="flex flex-col items-center gap-4">
		<GradientButton href="/costs/new" color="purpleToBlue">Register a new cost</GradientButton>
		<p>or</p>
    <GradientButton href="/costs/upload" color="purpleToPink"><UploadSolid class="me-2" /> Upload file</GradientButton>
	</div>
</div>

<style>
</style>
