import { Box } from 'components/Box';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovies';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) {
    return null;
  }

  return (
    <Box>
      <MovieCard data={movie} />
      <Outlet />
    </Box>
  );
};
