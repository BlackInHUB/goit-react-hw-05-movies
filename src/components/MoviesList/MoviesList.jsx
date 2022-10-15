import { List, ListItem, MovieLink } from './MoviesList.styled';
import { HiFilm } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <List>
            {movies.map(({ id, title }) => (
            <ListItem key={id}>
                <HiFilm size="14" />
                <MovieLink to={`${id}`} state={{from: location}}>{title}</MovieLink>
            </ListItem>
            ))}
        </List>
    )
}