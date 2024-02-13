import { getPageBySlug } from '../../../../services/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let pageData;
	try {
		// Directly use the response from getPageBySlug
		pageData = await getPageBySlug(params.slug);
	} catch (error) {
		console.error('Error fetching page:', error);
	}

	// Ensure you return an object with props for SvelteKit load function
	if (pageData) {
		return pageData; // Correctly pass pageData as props
	} else {
		// Handle case where no page data is found, perhaps return an error status or default data
		error(404, 'Not found');
	}
}
