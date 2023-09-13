<script>
// @ts-nocheck

	import CateItem from "$lib/components/CateItem.svelte";
	import {categoryOrder} from "$lib/data/categoryData"
</script>

<svelte:head>
	<title>Take-Home-Quiz</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div id="wrap">
	<div class="container">
		{#each categoryOrder as category}
			<CateItem categoryId={category} />
		{/each}
	</div>
</div>

<style>
	  #wrap {
        width: 100%;
    }

    .container{
        width: 1200px;
        margin: 0 auto;
		padding: 32px;
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
    }
</style>
