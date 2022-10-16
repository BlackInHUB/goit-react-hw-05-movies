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

export const getMovieById = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=23f45f5baa89ae7759719795711df22f`;

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByIdCredits = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=23f45f5baa89ae7759719795711df22f`;

  try {
    const response = await axios.get(URL);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByIdReviews = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=23f45f5baa89ae7759719795711df22f`;

  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async value => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=23f45f5baa89ae7759719795711df22f&language=en-US&query=${value}&page=1&include_adult=false`;

  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
