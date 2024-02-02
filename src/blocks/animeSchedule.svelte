<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import * as Card from '$lib/components/ui/card';
	import { onMount } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';

	let scheduleData = null;

	onMount(async () => {
		const response = await fetch('/api/getschedule');
		if (response.ok) {
			scheduleData = await response.json();
		} else {
			console.error('Failed to fetch schedule');
		}
	});

	function getBadgeClass(airType) {
		if (airType === 'dub') {
			return 'bg-blue-500 border-blue-600';
		} else if (airType === 'sub') {
			return 'bg-yellow-500 border-yellow-600';
		} else {
			return 'bg-gray-500 border-gray-600'; // Default or other types
		}
	}

	function getPingColor(scheduleData) {
		if (!scheduleData) {
			return 'bg-red-500';
		} else {
			return 'bg-green-500'; // Default or other types
		}
	}

	function calculateTimeLeft(episodeDate) {
		const now = new Date();
		const releaseDate = new Date(episodeDate);
		const difference = releaseDate - now;

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}

		return timeLeft;
	}

	function formatCountdown(countdown) {
		return `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`;
	}
</script>

<!-- Mobile Schedule -->
<div class="p-2 bg-zinc-100 lg:p-8 lg:hidden">
	<Card.Root class="mx-2 lg:mx-4">
		<Card.Header class="flex items-center justify-between">
			<div class="flex items-center">
				<Card.Title>Upcoming Anime Releases</Card.Title>
				<span class="relative ml-1 flex h-3 w-3">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full {getPingColor(
							scheduleData
						)} opacity-75"
					></span>
					<span class="relative inline-flex rounded-full h-3 w-3 {getPingColor(scheduleData)}"
					></span>
				</span>
			</div>
			<Card.Description>Weekly</Card.Description>
		</Card.Header>
		<Card.Content>
			{#if scheduleData}
				<div class="overflow-x-auto">
					<Table.Root>
						<!-- Hide Table.Caption and Table.Head on small screens -->

						<Table.Header class="md:table-header-group hidden">
							<Table.Row>
								<Table.Head class="w-[100px]">Anime</Table.Head>
								<Table.Head>Type</Table.Head>
								<Table.Head>Episode</Table.Head>
								<Table.Head>Stream</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#each scheduleData as anime}
								<div class="mb-2 md:mb-0 shadow-md rounded-lg overflow-hidden">
									<div
										class="relative block bg-cover bg-center p-6"
										style="background-image: url('https://img.animeschedule.net/production/assets/public/img/{anime.imageVersionRoute}');"
									>
										<!-- Overlay content -->
										<div class="">
											<div class=" text-white font-extrabold p-4 rounded-lg drop-shadow-xl text-lg">
												{anime.english || anime.title}
											</div>
											<div class="flex justify-between items-center text-sm text-white mt-4">
												<Badge class={getBadgeClass(anime.airType)}>{anime.airType}</Badge>
												<Badge class="bg-green-500 border-green-600"
													>Episode {anime.episodeNumber}</Badge
												>
												<Badge class="bg-red-500 border-red-600">
													{formatCountdown(calculateTimeLeft(anime.episodeDate))}
												</Badge>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
			{:else}
				<p>Loading...</p>
			{/if}
		</Card.Content>
	</Card.Root>
</div>
<!-- Desktop Schedule -->
<div class="p-2 bg-zinc-100 lg:p-8 hidden lg:block">
	<Card.Root class="mx-2 lg:mx-4">
		<Card.Header class="flex items-center justify-between">
			<div class="flex items-center">
				<Card.Title>Upcoming Anime Releases</Card.Title>
				<span class="relative ml-1 flex h-3 w-3">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
					></span>
					<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
				</span>
			</div>
			<Card.Description>Weekly</Card.Description>
		</Card.Header>
		<Card.Content>
			{#if scheduleData}
				<div class="overflow-x-auto">
					<Table.Root>
						<!-- Hide Table.Caption and Table.Head on small screens -->

						<Table.Header class="md:table-header-group hidden">
							<Table.Row>
								<Table.Head class="w-[100px]">Anime</Table.Head>
								<Table.Head>Type</Table.Head>
								<Table.Head>Episode</Table.Head>
								<Table.Head>Stream</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#each scheduleData as anime}
								<Table.Row
									class="md:table-row block bg-white mb-2 md:mb-0 shadow-md rounded-lg md:shadow-none md:rounded-none"
								>
									<!-- Adjust Table.Cell for mobile view -->

									<Table.Cell class="font-medium  md:p-2 block p-4 md:table-cell">
										{anime.english || anime.title}
									</Table.Cell>
									<Table.Cell class=" md:p-2  p-4 md:table-cell">
										{anime.airType}
									</Table.Cell>

									<Table.Cell class=" md:p-2 block p-4 md:table-cell">
										<div class="md:hidden font-bold">Episode</div>
										{anime.episodeNumber}
									</Table.Cell>
									<Table.Cell class=" md:p-2 block p-4 md:table-cell">
										<div class="md:hidden font-bold">Stream</div>
										$250.00
									</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
			{:else}
				<p>Loading...</p>
			{/if}
		</Card.Content>
	</Card.Root>
</div>
