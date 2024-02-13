import axios from 'axios';
import qs from 'qs';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const getPageBySlug = async (slug) => {
	try {
		// Construct the query using `qs`
		const query = qs.stringify(
			{
				where: {
					slug: {
						equals: slug
					}
				}
			},
			{
				addQueryPrefix: true // This adds the '?' at the beginning
			}
		);

		const response = await axios.get(`${API_BASE_URL}/pages${query}&depth=1`);
		if (response.data && response.data.docs && response.data.docs.length > 0) {
			// Assuming 'docs' contains the pages and you're interested in the first match
			return response.data.docs[0];
		} else {
			// Handle no results or errors as needed
			return null;
		}
	} catch (error) {
		console.error('Error fetching page by slug:', error);
		throw error;
	}
};

export const getCategoryBySlug = async (slug) => {
	try {
		// Construct the query using `qs`
		const query = qs.stringify(
			{
				where: {
					slug: {
						equals: slug
					}
				}
			},
			{
				addQueryPrefix: true // This adds the '?' at the beginning
			}
		);
		console.log(query);

		const response = await axios.get(`${API_BASE_URL}/categories${query}&depth=3`);
		if (response.data && response.data.docs && response.data.docs.length > 0) {
			// Assuming 'docs' contains the categories and you're interested in the first match
			return response.data.docs[0];
		} else {
			// Handle no results or errors as needed
			return null;
		}
	} catch (error) {
		console.error('Error fetching category by slug:', error);
		throw error;
	}
};

export const getGlobalBySlug = async (slug) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/globals/${slug}?depth=1`);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};

// Fetch all pages
export const getAllPages = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/pages?depth=1`);
		if (response.data && response.data.docs) {
			// Assuming 'docs' contains the array of pages
			return response.data.docs;
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error fetching all pages:', error);
		throw error;
	}
};

// Fetch all categories
export const getAllCategories = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/categories?depth=4`);
		if (response.data && response.data.docs) {
			// Assuming 'docs' contains the array of categories
			return response.data.docs;
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error fetching all categories:', error);
		throw error;
	}
};
