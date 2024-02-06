<script>
	import Button from '$lib/components/ui/button/button.svelte';
	export let data;
	console.log(data);
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
		<div
			class="relative isolate overflow-hidden bg-sky-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
		>
			<h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{data.title}
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
				{data.description}
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button href={data.buttonLink} variant="sky" class="">{data.buttonText}</Button>
				<a href="#" class="text-sm font-semibold leading-6 text-white"
					>Learn more <span aria-hidden="true">→</span></a
				>
			</div>
			<svg
				viewBox="0 0 1024 1024"
				class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
				aria-hidden="true"
			>
				<defs>
					<radialGradient id="skyGradient" cx="50%" cy="50%" r="50%">
						<stop offset="0%" style="stop-color:#7dd3fc;" />
						<!-- Tailwind sky-300 -->
						<stop offset="100%" style="stop-color:#0284c7;" />
						<!-- Tailwind sky-600 -->
					</radialGradient>
				</defs>
				<circle cx="512" cy="512" r="512" fill="url(#skyGradient)" fill-opacity="0.7" />
			</svg>
		</div>
	</div>
</div>
