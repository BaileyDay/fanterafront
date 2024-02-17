<script>
	export let data;
	import { getImageUrl } from '../services/getImageUrl';
</script>

<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
	<img
		src={getImageUrl(data.image.url)}
		alt=""
		class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
	/>
</div>
