import { Box } from 'components/Box';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/getMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get('query');

  const handleSearchSubmit = e => {
    e.preventDefault();

    const searchQuery = e.target[0].value.toLowerCase();

    if (searchQuery === '') {
      return alert('Type something!');
    }

    setSearchParams({ query: searchQuery });

    e.target[0].value = '';
  };

  useEffect(() => {
    if (!search) {
      return;
    }

    getSearchMovies(search).then(setMovies);
  }, [search]);

  return (
    <Box p={4}>
      <SearchForm onSubmit={handleSearchSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Box>
  );
};

export default Movies;
