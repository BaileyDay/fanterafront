<script>
	export let data;
</script>

<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
		<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
			<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
				<p class="text-xl leading-8 text-gray-600">
					{@html data.mission_html}
				</p>
				<div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
					<p class="space-y-3">
						{@html data.description_html}
					</p>
				</div>
			</div>
			<div class="lg:flex lg:flex-auto lg:justify-center">
				<dl class="w-64 space-y-8 xl:w-80">
					{#each data.stats as stat}
						<div class="flex flex-col-reverse gap-y-4">
							<dt class="text-base leading-7 text-gray-600">{stat.label}</dt>
							<dd class="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</div>
