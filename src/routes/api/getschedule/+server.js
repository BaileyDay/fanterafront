// src/routes/api/getschedule.js
import axios from 'axios';
import { ANIMESCHEDULE_API_KEY } from '$env/static/private';

// Function to get the current week number
function getCurrentWeek() {
	const currentDate = new Date();
	const startDate = new Date(currentDate.getFullYear(), 0, 1);
	const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000) + 1);
	return Math.ceil(days / 7);
}

export async function GET() {
	const year = new Date().getFullYear();
	const week = getCurrentWeek();

	try {
		const allAnime = await fetchAndFilterAnime();

		// Return a proper Response object
		return new Response(JSON.stringify(allAnime), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error('Error fetching anime schedule:', error);
		// Return an error response
		return new Response(JSON.stringify({ error: 'Failed to fetch anime schedule' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

// Helper function to check if a date is within the next 7 days
function isWithinNext7Days(episodeDate) {
	const today = new Date();
	const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
	return episodeDate >= today && episodeDate < nextWeek;
}

async function fetchAndFilterAnime() {
	const year = new Date().getFullYear();
	const week = getCurrentWeek();
	const apiUrl = `https://animeschedule.net/api/v3/timetables`;

	try {
		const responseSub = await axios.get(`${apiUrl}/sub?year=${year}&week=${week}`, {
			headers: { Authorization: `Bearer ${ANIMESCHEDULE_API_KEY}` }
		});
		const responseDub = await axios.get(`${apiUrl}/dub?year=${year}&week=${week}`, {
			headers: { Authorization: `Bearer ${ANIMESCHEDULE_API_KEY}` }
		});

		const combinedAnime = [...responseSub.data, ...responseDub.data];
		const upcomingAnime = combinedAnime.filter((anime) => {
			const episodeDate = new Date(anime.episodeDate);
			return isWithinNext7Days(episodeDate);
		});

		// Sort by episode date
		upcomingAnime.sort((a, b) => new Date(a.episodeDate) - new Date(b.episodeDate));

		// Keep only the first 6 items
		return upcomingAnime.slice(0, 6);
	} catch (error) {
		console.error('Error fetching or filtering anime schedule:', error);
		throw error;
	}
}
