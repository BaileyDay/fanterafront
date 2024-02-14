<script>
	import GlobalNav from '../../../../globals/globalNav.svelte';
	export let data;
	import { getImageUrl } from '../../../../services/getImageUrl';
</script>

<svelte:head>
	<title>{data.meta.title || 'Fantera'}</title>
	<meta
		name="description"
		content={data.meta.description ||
			'Insightful Anime Reviews & News. Discover, engage, and connect with the best of manga and anime culture.'}
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={`https://fantera.online/page/${data.slug || ''}`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.meta.title || 'Fantera'} />
	<meta
		property="og:description"
		content={data.meta.description ||
			'Insightful Anime Reviews & News. Discover, engage, and connect with the best of manga and anime culture.'}
	/>
	<meta
		property="og:image"
		content={data.meta.image
			? getImageUrl(data.meta.image.url)
			: 'https://api.fantera.online/media/meta.png'}
	/>

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="fantera.online" />
	<meta property="twitter:url" content={`https://fantera.online/page/${data.slug || ''}`} />
	<meta name="twitter:title" content={data.meta.title || 'Fantera — Home'} />
	<meta
		name="twitter:description"
		content={data.meta.description ||
			'Insightful Anime Reviews & News. Discover, engage, and connect with the best of manga and anime culture.'}
	/>
	<meta
		name="twitter:image"
		content={data.meta.image
			? getImageUrl(data.meta.image.url)
			: 'https://api.fantera.online/media/meta.png'}
	/>
</svelte:head>

<GlobalNav />

<slot />
