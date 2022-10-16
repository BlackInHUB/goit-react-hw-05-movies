import { Box } from 'components/Box';
import Loader from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovies';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { AddInfo } from 'components/AddInfo/AddInfo';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) {
    return null;
  }

  return (
    <Box pl={4} pr={4}>
      <GoBackBtn state={{ from: location }} />
      <MovieInfo movie={movie} />
      <AddInfo location={location} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
