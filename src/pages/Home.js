import { useState, useEffect } from 'react';
import { getTrending } from 'services/getMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Box } from 'components/Box';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <Box p={4} borderBottom="3px solid grey">
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </Box>
  );
};

export default Home;
