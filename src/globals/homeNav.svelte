<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	import { getGlobalBySlug } from '../services/api';

	let navClass = '';
	let drawerOpen = false;

	let globalData = { pages: [] };

	onMount(async () => {
		const data = await getGlobalBySlug('nav');
		globalData = data;
	});

	// Handle scroll to adjust navbar class
	function handleScroll() {
		navClass =
			window.scrollY > 0
				? `${drawerOpen ? 'shadow-none' : 'shadow-md'} lg:pt-4 bg-sky-500 lg:bg-white lg:dark:bg-zinc-800`
				: 'lg:pt-12 lg:dark:bg-zinc-900';
	}

	// Register and clean up the scroll event listener
	onMount(() => {
		handleScroll(); // Call initially in case the page is not at the top
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// Toggle the drawer state
	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 mx-auto flex h-[74px] w-full items-center justify-between px-4 py-4 transition-all delay-100 duration-300 ease-in-out lg:h-24 lg:px-32 {navClass}"
>
	<div class="flex items-center lg:hidden">
		<Sheet.Root>
			<Sheet.Trigger>
				<button on:click={toggleDrawer} class="p-2">
					<Menu class="text-white" />
				</button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<Sheet.Header>
					<Sheet.Title>Menu</Sheet.Title>
				</Sheet.Header>
				<div class="p-4">
					{#each globalData.pages as page}
						<a href="/{page.page.slug}" class="block p-2">{page.page.title}</a>
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
		{#each globalData.pages as page}
			<li>
				<a href="/{page.page.slug}" class="block text-slate-900 hover:text-sky-500 dark:text-white"
					>{page.page.title}</a
				>
			</li>
		{/each}
	</ul>
	<a
		href="/subscribe"
		type="button"
		class="relative ml-2 inline-flex flex-none overflow-hidden rounded-full border border-white p-2 text-center text-sm
  font-light text-white transition duration-300 ease-in-out hover:text-white focus:outline-none focus:ring-4 lg:mr-0 lg:rounded-xl lg:border-2 lg:border-none lg:px-10 lg:py-6 lg:font-semibold"
	>
		<span
			class="absolute left-0 top-0 z-0 h-full w-full transition-opacity duration-300 ease-in-out lg:bg-gradient-to-br lg:from-blue-500 lg:to-sky-400"
		></span>
		<span
			class="absolute left-0 top-0 z-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 lg:bg-gradient-to-br lg:from-blue-600 lg:to-sky-500"
		></span>
		<span class="relative z-10">Subscribe</span>
	</a>
</nav>