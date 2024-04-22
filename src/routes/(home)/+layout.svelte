<script>
	import HomeNav from '../../globals/homeNav.svelte';
	export let data;
	import { getImageUrl } from '../../services/getImageUrl';
</script>

<svelte:head>
	<title>{data.meta.title || 'Fantera — Home'}</title>
	<meta
		name="description"
		content={data.meta.description ||
			'Insightful Anime Reviews & News. Discover, engage, and connect with the best of manga and anime culture.'}
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={`https://fantera.online${data.meta.url || ''}`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.meta.title || 'Fantera — Home'} />
	<meta
		property="og:description"
		content={data.meta.description ||
			'Insightful Anime Reviews & News. Discover, engage, and connect with the best of manga and anime culture.'}
	/>
	<meta
		property="og:image"
		content={getImageUrl(data?.meta?.image?.url) || 'https://api.fantera.online/media/meta.png'}
	/>

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="fantera.online" />
	<meta property="twitter:url" content={`https://fantera.online${data.meta.url || ''}`} />
	<meta name="twitter:title" content={data.meta.title || 'Fantera — Home'} />
	<meta
		name="twitter:description"
		content={data.meta.description ||
			'Insightful Anime Reviews & News. Discover, engage, and connect with the best of manga and anime culture.'}
	/>
	<meta
		name="twitter:image"
		content={getImageUrl(data?.meta?.image?.url) || 'https://api.fantera.online/media/meta.png'}
	/>
</svelte:head>
<HomeNav />

<slot />
