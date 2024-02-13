import { getCategoryBySlug } from '../../../services/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let categoryData;
	try {
		// Directly use the response from getPageBySlug
		categoryData = await getCategoryBySlug(params.category);
	} catch (error) {
		console.error('Error fetching page:', error);
	}

	// Ensure you return an object with props for SvelteKit load function
	if (categoryData) {
		return categoryData; // Correctly pass pageData as props
	} else {
		// Handle case where no page data is found, perhaps return an error status or default data
		error(404, 'Not found');
	}
}
