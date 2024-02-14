<script>
	import { onMount } from 'svelte';
	import { getGlobalBySlug } from '../services/api';
	import { getImageUrl } from '../services/getImageUrl';

	let globalData = { footerLinks: [], logo: {} };

	onMount(async () => {
		const data = await getGlobalBySlug('footer');
		globalData = data;
		console.log(globalData);
	});

	let year = new Date().getFullYear();
</script>

<svg
	id="visual"
	viewBox="100 450 800 150"
	preserveAspectRatio="none"
	version="1.1"
	class="z-20 w-auto fill-sky-500 dark:fill-zinc-800"
>
	<path
		d="M0 514L37.5 522.2C75 530.3 150 546.7 225 551.3C300 556 375 549 450 530C525 511 600 480 675 475.2C750 470.3 825 491.7 862.5 502.3L900 513L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
	></path>
</svg>

<footer class="bg-sky-500 dark:bg-zinc-800 dark:text-white text-white">
	<!-- SVG Wave -->

	<div class="lg:-10 mx-auto max-w-screen-xl p-4 py-6 md:p-8">
		<div class="grid grid-cols-2 gap-8 lg:grid-cols-6">
			<!-- Logo and intro section -->
			<div class="col-span-2">
				<!-- Logo goes here, ensure you have a Logo.svelte or similar component -->
				<div class="flex flex-grow text-white ml-2">
					<a href="/">
						<img src={getImageUrl(globalData.logo.url)} alt="" class="h-14" />
					</a>
				</div>
				<p class="my-4 font-light text-slate-100 dark:text-gray-400">
					Fantera is your ultimate destination for all things anime, offering a unique media
					publishing site and newsletter to keep you updated on the latest trends, news, and
					insights in the anime world.
				</p>
				<!-- Social links icons -->
			</div>
			<!-- Footer Links -->
			{#each globalData.footerLinks as { category, links }}
				<div class="lg:mx-auto">
					<h2 class="mb-6 text-sm font-bold uppercase text-slate-100 dark:text-white">
						{category}
					</h2>
					<ul class="text-slate-100 dark:text-gray-400">
						{#each links as { name, url }}
							<li class="mb-4">
								<a href={url} class="hover:underline">{name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<hr class="my-6 border-slate-100 dark:border-gray-700 sm:mx-auto lg:my-8" />
		<span class="block text-center text-sm text-slate-100 dark:text-gray-400">
			© {year} <a href="#" class="hover:underline">Fantera™</a>. All Rights Reserved.
		</span>
	</div>
</footer>
