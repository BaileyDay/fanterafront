import { getPostBySlug } from '../../../../services/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let postData;

	try {
		// Directly use the response from getPageBySlug
		postData = await getPostBySlug(params.post);
	} catch (error) {
		console.error('Error fetching page:', error);
	}

	if (!postData) {
		error(404, {
			message: 'Not found'
		});
	} else {
		return postData;
	}
}
