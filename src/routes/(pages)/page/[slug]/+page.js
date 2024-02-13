import { getPageBySlug } from '../../../../services/api.js';
import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	let pageData;

	if (params.slug == 'home') {
		redirect(307, '/');
	}

	try {
		// Directly use the response from getPageBySlug
		pageData = await getPageBySlug(params.slug);
	} catch (error) {
		console.error('Error fetching page:', error);
	}

	if (!pageData) {
		error(404, {
			message: 'Not found'
		});
	} else {
		return pageData;
	}
}
