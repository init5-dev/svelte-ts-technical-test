<script lang="ts">
  import CostsTable from "$lib/components/CostsTable.svelte";
	import type { PageData } from "./$types";

  export let data: PageData
</script>

<CostsTable {data} />
