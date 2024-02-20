<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	import { getGlobalBySlug } from '../services/api';
	import { getImageUrl } from '../services/getImageUrl';
	import Icon from '@iconify/svelte';

	// Define types
	interface Page {
		slug: string;
		title: string;
	}

	interface Category {
		slug: string;
		name: string;
	}

	interface GlobalData {
		pages: Page[];
		desktopLogo: { url: string };
		mobileLogo: { url: string };
		categories: Category[];
	}

	// Initialize variables
	let navClass = '';
	let drawerOpen = false;
	let globalData: GlobalData = {
		pages: [],
		desktopLogo: { url: '' },
		mobileLogo: { url: '' },
		categories: []
	};

	// Fetch global data on mount
	onMount(async () => {
		const data = await getGlobalBySlug('nav');
		globalData = {
			pages: data.pages.map((page: { page: { slug: string; title: string } }) => ({
				slug: page.page.slug,
				title: page.page.title
			})),
			desktopLogo: { url: data.desktopLogo.url },
			mobileLogo: { url: data.mobileLogo.url },
			categories: data.categories.map((category: { category: Category }) => ({
				slug: category.category.slug,
				name: category.category.name
			}))
		};
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

	// Get icon based on slug
	function getIcon(slug: string): string {
		const icons: Record<string, string> = {
			home: 'material-symbols:home-outline-rounded',
			about: 'material-symbols:info-outline-rounded',
			contact: 'mdi-light:email',
			news: 'material-symbols:newsmode-outline-rounded',
			culture: 'mdi:heart-outline',
			streaming: 'ic:round-live-tv',
			reviews: 'ph:star',
			lore: 'ph:scroll',
			manga: 'ph:books',
			guides: 'mdi:compass-outline',
			'privacy-policy': 'material-symbols:privacy-tip-rounded'
		};
		return icons[slug] || 'mdi-light:file-document'; // Default icon
	}
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 mx-auto flex h-[74px] w-full items-center justify-between px-4 py-4 transition-all delay-100 duration-300 ease-in-out lg:h-24 lg:px-32 lg:bg-transparent rounded-b-xl {navClass}"
>
	<div class="flex items-center lg:hidden">
		<div class="flex items-center lg:hidden">
			<Sheet.Root>
				<Sheet.Trigger>
					<button on:click={toggleDrawer} class="p-2">
						<Menu class="text-white" />
					</button>
				</Sheet.Trigger>
				<Sheet.Content side="left" class="bg-sky-500 rounded-r-xl">
					<Sheet.Header class="flex items-center text-white pb-2">
						<a href="/" class=" flex items-center">
							<img src={getImageUrl(globalData.mobileLogo.url)} alt="" class="h-10" />
						</a>
					</Sheet.Header>
					<hr />

					{#each globalData.pages as page (page.slug)}
						<div class="text-xl mt-2">
							<a href="/page/{page.slug}" class="block p-2 font-bold text-white font-montserrat">
								<Icon icon={getIcon(page.slug)} class="inline-block h-6 w-6 mr-2 mb-1 " />
								{page.title}
							</a>
						</div>
					{/each}

					<div class="text-2xl mt-4">
						<div class="block p-2 font-bold text-white font-montserrat">
							<Icon
								icon="material-symbols:list-alt-outline-rounded"
								class="inline-block h-6 w-6 mr-2 mb-1 "
							/>
							Categories
						</div>
						<hr />
					</div>

					{#each globalData.categories as category (category.slug)}
						<a
							href="/{category.slug}"
							class="block p-2 font-bold text-white text-xl mt-4 font-montserrat"
						>
							<Icon icon={getIcon(category.slug)} class="inline-block h-5 w-5 mr-2 mb-1" />
							{category.name}
						</a>
					{/each}
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
	<!-- Centering the logo on mobile and desktop -->
	<a href="/" class="flex-grow hidden lg:flex">
		<img src={getImageUrl(globalData.desktopLogo.url)} class="h-14" alt="" />
	</a>
	<!-- Mobile Logo -->
	<div class="flex lg:hidden flex-grow justify-center text-white ml-4">
		<a href="/">
			<img src={getImageUrl(globalData.mobileLogo.url)} alt="" class="h-10" />
		</a>
	</div>
	<!-- This empty div ensures the space-between effect which centers the logo when the menu is visible -->
	<div class="lg:hidden flex">
		<!-- Invisible placeholder to balance the flex layout -->
	</div>
	<ul class="hidden space-x-8 lg:flex mr-4">
		{#each globalData.pages as page (page.slug)}
			<li>
				<a
					href="/{page.slug}"
					class="block text-slate-900 hover:text-sky-500 dark:text-white font-montserrat font-bold"
					>{page.title}</a
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
