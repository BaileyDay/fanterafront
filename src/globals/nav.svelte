<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { IconMenu2 } from '@tabler/icons-svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let navClass = '';
	let drawerOpen = false;

	// Navigation items
	const navItems = [
		{ text: 'News', href: '/category/news' },
		{ text: 'Reviews', href: '/category/reviews' },
		{ text: 'Streaming', href: '/category/streaming' },
		{ text: 'Manga', href: '/category/manga' },
		{ text: 'Events', href: '/category/events' },
		{ text: 'Culture', href: '/category/culture' },
		{ text: 'Merchandise', href: '/category/merchandise' }
	];
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 mx-auto flex h-[74px] w-full items-center justify-between px-4 py-4 transition-all delay-100 duration-300 ease-in-out lg:h-24 lg:px-32 {navClass}"
>
	<div class="flex items-center lg:hidden">
		<Sheet.Root>
			<Sheet.Trigger>
				<button class="p-2">
					<IconMenu2 class="text-white" />
				</button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<Sheet.Header>
					<Sheet.Title>Menu</Sheet.Title>
				</Sheet.Header>
				<div class="p-4">
					{#each navItems as { text, href }}
						<a {href} class="block p-2">{text}</a>
					{/each}
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
	<!-- Centering the logo on mobile and desktop -->
	<a href="/" class="flex-grow justify-center hidden lg:flex">
		<span>Fantera</span>
	</a>
	<!-- Mobile Logo -->
	<div class="flex lg:hidden flex-grow justify-center text-white">
		<a href="/">
			<span>Fantera</span>
		</a>
	</div>
	<!-- This empty div ensures the space-between effect which centers the logo when the menu is visible -->
	<div class="lg:hidden flex">
		<!-- Invisible placeholder to balance the flex layout -->
	</div>
	<ul class="hidden space-x-8 lg:flex">
		{#each navItems as { text, href }}
			<li>
				<a {href} class="block text-slate-900 hover:text-sky-500 dark:text-white">{text}</a>
			</li>
		{/each}
	</ul>
	<div class="flex items-center">
		<Button
			href="/subscribe"
			class="text-sm text-white lg:mr-0 lg:px-10 lg:py-8 lg:text-base lg:font-semibold lg:ml-6 lg:bg-sky-500"
			>Subscribe</Button
		>
	</div>
</nav>
