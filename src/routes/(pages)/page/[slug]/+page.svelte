<script lang="ts">
	import AboutHero from '../../../../blocks/aboutHero.svelte';
	import AnimeSchedule from '../../../../blocks/animeSchedule.svelte';
	import CenterImage from '../../../../blocks/centerImage.svelte';
	import EmailHero from '../../../../blocks/emailHero.svelte';
	import MissionBlock from '../../../../blocks/missionBlock.svelte';
	import TeamBlock from '../../../../blocks/teamBlock.svelte';
	import TextBlock from '../../../../blocks/textBlock.svelte';
	import ValuesBlock from '../../../../blocks/valuesBlock.svelte';
	export let data;

	const blockComponents = {
		emailHero: EmailHero,
		animeSchedule: AnimeSchedule,
		textBlock: TextBlock,
		aboutHero: AboutHero,
		missionBlock: MissionBlock,
		centerImage: CenterImage,
		valuesBlock: ValuesBlock,
		teamBlock: TeamBlock
		// ... other block types
	};
</script>

{#each data.content as block}
	{#if block.blockType in blockComponents}
		<svelte:component this={blockComponents[block.blockType]} data={block} />
	{/if}
{/each}
