import { getPageBySlug } from '../../services/api';

export async function load({ params }) {
	let pageData;
	let slug = 'home'; // Default slug or use params.slug if dynamic

	try {
		// Directly use the response from getPageBySlug
		pageData = await getPageBySlug(slug);
	} catch (error) {
		console.error('Error fetching page:', error);
	}

	// Ensure you return an object with props for SvelteKit load function
	if (pageData) {
		return pageData; // Correctly pass pageData as props
	} else {
		// Handle case where no page data is found, perhaps return an error status or default data
		return {
			status: 404,
			props: { error: 'Page not found' }
		};
	}
}
