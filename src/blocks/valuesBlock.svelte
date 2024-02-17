<script>
	export let data;
</script>

<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			At Fantera, we're dedicated to creating a world where your passion for anime is supported by
			our unwavering commitment to integrity, privacy, and straightforwardness.
		</p>
	</div>
	<dl
		class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each data.values as value}
			<div>
				<dt class="font-semibold text-gray-900 space-y-3">{value.title}</dt>
				<dd class="mt-1 text-gray-600">
					{@html value.value_html}
				</dd>
			</div>
		{/each}
	</dl>
</div>
