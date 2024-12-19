import { fetchData } from './apiCalls';

async function getMoviePosters() {
  try {
    const response = await fetchData('/api/v1/movies');
    const moviePosters = response.movies || response; // Adjust based on your API response structure
    return moviePosters.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("Error fetching movie posters:", error);
    return [];
  }
}

export default getMoviePosters;