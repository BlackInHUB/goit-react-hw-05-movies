import { Box } from 'components/Box';
import Loader from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovies';

const MovieDetails = () => {
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
