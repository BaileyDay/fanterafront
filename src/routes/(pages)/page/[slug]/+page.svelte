<script lang="ts">
	import AnimeSchedule from '../../../../blocks/animeSchedule.svelte';
	import EmailHero from '../../../../blocks/emailHero.svelte';
	import TextBlock from '../../../../blocks/textBlock.svelte';
	export let data;

	const blockComponents = {
		emailHero: EmailHero,
		animeSchedule: AnimeSchedule,
		textBlock: TextBlock
		// ... other block types
	};
</script>

{#each data.content as block}
	{#if block.blockType in blockComponents}
		<svelte:component this={blockComponents[block.blockType]} data={block} />
	{/if}
{/each}
