import axios from 'axios';

export const getTrending = async () => {
  const URL =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=23f45f5baa89ae7759719795711df22f';

  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
