<script>
	export let data;
	import './content-style.css';
	import { getImageUrl } from '../services/getImageUrl';
	import { parse } from 'node-html-parser';
	console.log(data);

	let processedHtml = ''; // Initialize with empty string

	// Reactive statement that watches for changes in `data.body_html`
	$: processedHtml = data && data.body_html ? processHtmlContent(data.body_html) : '';

	function processHtmlContent(htmlContent) {
		const root = parse(htmlContent); // Directly parse the HTML content

		// Find all <img> and <source> elements and update their src or srcset attributes
		const images = root.querySelectorAll('img');
		images.forEach((img) => {
			const relativePath = img.getAttribute('src');
			img.setAttribute('src', getImageUrl(relativePath));
		});

		const sources = root.querySelectorAll('source');
		sources.forEach((source) => {
			const relativePath = source.getAttribute('srcset');
			source.setAttribute('srcset', getImageUrl(relativePath));
		});

		return root.toString(); // Return the updated HTML as a string
	}
</script>

<div class="bg-white py-4 lg:px-8">
	<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
		<div class="content-style">
			{@html processedHtml}
			<!-- Use processedHtml to render the modified content -->
		</div>
	</div>
</div>
