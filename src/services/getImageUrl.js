// src/lib/getImageUrl.js

// Fetch the SITE_URL from environment variables
const siteUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

/**
 * Get the full URL for an image.
 * @param {string} imagePath - The path of the image.
 * @returns {string} - The full URL of the image.
 */
export function getImageUrl(imagePath) {
	if (!imagePath) return '';

	// Check if imagePath is already a full URL
	if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
		return imagePath;
	}

	// Construct the full URL
	return `${siteUrl}${imagePath}`;
}
