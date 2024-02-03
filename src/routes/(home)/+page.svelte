<script lang="ts">
	import AnimeSchedule from '../../blocks/animeSchedule.svelte';
	import EmailHero from '../../blocks/emailHero.svelte';
	export let data;

	const blockComponents = {
		emailHero: EmailHero,
		animeSchedule: AnimeSchedule
		// ... other block types
	};
</script>

<!-- Updated to iterate over data.pageData.content -->
{#each data.content as block}
	{#if block.blockType in blockComponents}
		<svelte:component this={blockComponents[block.blockType]} data={block} />
	{/if}
{/each}
