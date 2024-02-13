// src/routes/posts/[category]/+page.js
import { getCategoryBySlug } from '../../../services/api.js';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	let categoryData;

	if (params.category == 'home') {
		redirect(307, '/');
	}

	try {
		// Directly use the response from getCategoryBySlug
		categoryData = await getCategoryBySlug(params.category);
	} catch (err) {
		console.error('Error fetching category:', err);
	}

	if (!categoryData) {
		// If no category data was found, throw a 404 error
		throw error(404, 'Category not found');
	}

	// If category data is found, return it to the page
	return categoryData;
}
