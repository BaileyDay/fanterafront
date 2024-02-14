import { getCategoryBySlug } from '../../../services/api.js';
import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	let categoryData;

	if (params.category == 'home') {
		redirect(307, '/');
	}

	try {
		// Directly use the response from getPageBySlug
		categoryData = await getCategoryBySlug(params.category);
	} catch (error) {
		console.error('Error fetching page:', error);
	}

	if (!categoryData) {
		error(404, {
			message: 'Not found'
		});
	} else {
		return categoryData;
	}
}
