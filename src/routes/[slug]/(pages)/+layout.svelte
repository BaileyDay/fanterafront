<script>
	import GlobalNav from '../../../globals/globalNav.svelte';
	export let data;
</script>

<head>
	<title>{data.meta.title}</title>
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content="URL to your image" />
	<meta property="og:type" content="website" />
	<!-- Other global meta tags -->
</head>

<GlobalNav />

<slot />
