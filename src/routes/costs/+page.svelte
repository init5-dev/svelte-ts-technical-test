<script lang="ts">
  import Cost from "$lib/components/Cost.svelte";
	import type { PageData } from "./$types";

  export let data: PageData
</script>

<Cost {data} />
