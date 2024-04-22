import axios from 'axios';
import qs from 'qs';
import { env } from '$env/dynamic/public';

const API_BASE_URL = env.PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

const handleResponse = (response) => {
	if (response.data && response.data.docs && response.data.docs.length > 0) {
		return response.data.docs[0];
	} else {
		return response.data || null;
	}
};

const handleError = (error, errorMessage) => {
	console.error(errorMessage, error);
	throw error;
};

const constructQuery = (params) => {
	return qs.stringify(params, {
		addQueryPrefix: true
	});
};

const fetchData = async (url) => {
	try {
		const response = await axios.get(url);
		return handleResponse(response);
	} catch (error) {
		handleError(error, 'Error fetching data:');
	}
};

export const getPageBySlug = async (slug) => {
	const query = constructQuery({
		where: {
			slug: {
				equals: slug
			}
		},
		depth: 2
	});

	const url = `${API_BASE_URL}/pages${query}`;
	return fetchData(url);
};

export const getCategoryBySlug = async (slug) => {
	const query = constructQuery({
		where: {
			slug: {
				equals: slug
			}
		},
		depth: 3
	});

	const url = `${API_BASE_URL}/categories${query}`;
	return fetchData(url);
};

export const getPostBySlug = async (slug) => {
	const query = constructQuery({
		where: {
			slug: {
				equals: slug
			}
		},
		depth: 2
	});

	const url = `${API_BASE_URL}/posts${query}`;
	return fetchData(url);
};

export const getGlobalBySlug = async (slug) => {
	const url = `${API_BASE_URL}/globals/${slug}?depth=1`;
	return fetchData(url);
};

export const getAllPages = async () => {
	const url = `${API_BASE_URL}/pages?depth=1`;
	return fetchData(url);
};

export const getAllCategories = async () => {
	const url = `${API_BASE_URL}/categories?depth=4`;
	return fetchData(url);
};
