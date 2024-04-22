<script>
	import { getImageUrl } from '../../../services/getImageUrl.js';
	export let data;
</script>

<div
	class=" relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-16 lg:mt-48 lg:w-1/2 lg:mx-auto lg:rounded-xl"
>
	<img
		src={getImageUrl(data?.heroImage?.url)}
		alt=""
		class="absolute inset-0 -z-10 h-full w-full object-cover bg-blend-multiply opacity-15"
	/>
	<div
		class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
		aria-hidden="true"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#38bdf8] to-[#0ea5e9] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div
		class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
		aria-hidden="true"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#38bdf8] to-[#0ea5e9] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{data.name}</h2>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				{data.description}
			</p>
		</div>
	</div>
</div>
<div class="bg-white py-12 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#if data.posts}
				{#each data.posts as post}
					<article
						class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-60 sm:pt-48 lg:pt-80"
					>
						<img
							src={getImageUrl(post.heroImage.url)}
							alt=""
							class="absolute inset-0 -z-10 h-full w-full object-cover"
						/>
						<div
							class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
						></div>
						<div
							class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
						></div>

						<div
							class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
						>
							<time datetime={new Date(post.updatedAt).toDateString()} class="mr-8"
								>{new Date(post.updatedAt).toDateString()}</time
							>
							<div class="-ml-4 flex items-center gap-x-4">
								<svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
									<circle cx="1" cy="1" r="1" />
								</svg>
								<div class="flex gap-x-2.5">
									<img
										src={getImageUrl(post.author.profilePicture.url)}
										alt=""
										class="h-6 w-6 flex-none rounded-full bg-white/10"
									/>
									{post.author.username}
								</div>
							</div>
						</div>
						<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
							<a href={`/${post.category.slug}/${post.slug}`}>
								<span class="absolute inset-0"></span>
								{post.title}
							</a>
						</h3>
						<p></p>
					</article>
				{/each}
			{/if}

			<!-- More posts... -->
		</div>
	</div>
</div>
