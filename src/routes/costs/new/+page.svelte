<script lang="ts">
  import RegisterCost from "$lib/components/RegisterCost.svelte";
  import type { PageData } from "./$types"

  export let data: PageData 
</script>

<RegisterCost {data} />
