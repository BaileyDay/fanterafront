import { getPageBySlug } from '../services/api';
export async function load({ params }) {
	let pageData;
	let slug = 'home'; // Example slug

	try {
		const response = await getPageBySlug(slug);
		if (response.docs && response.docs.length > 0) {
			pageData = response.docs[0];
		}
	} catch (error) {
		console.error('Error fetching page:', error);
	}

	return pageData;
}
