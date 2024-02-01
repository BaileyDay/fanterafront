import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'; // Replace with your actual Payload API base URL

export const getPayloadData = async (path) => {
	try {
		const response = await axios.get(`${API_BASE_URL}${path}?depth=1`);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};

export const getPageBySlug = async (slug) => {
	return await getPayloadData(`/pages?where={"slug":"${slug}"}`);
};
