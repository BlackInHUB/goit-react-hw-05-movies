import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import { HomePageTitle, List, ListItem, TrendingLink } from './Home.styled';
import { getTrending } from 'services/getMovies';
import { HiFire } from 'react-icons/hi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <Box>
      <HomePageTitle>Trending today</HomePageTitle>
      <List>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>
            <HiFire size="14" />
            <TrendingLink to={`${id}`}>{title}</TrendingLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Home;
