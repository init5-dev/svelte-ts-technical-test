<script>
	import { page } from '$app/stores';
</script>

<div>
  <div class="error">
    {$page.error.message}
  </div>
</div>

<style>
  div {
    display: flex;
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
</style>