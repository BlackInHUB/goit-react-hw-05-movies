import PropTypes from 'prop-types'
import { List, ListItem, MovieLink } from './MoviesList.styled';
import { HiFilm } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    const getCorrectHref = (id) => {
        if (location.pathname === '/') {
            return `/movies/${id}`
        } else {
            return `${id}`
        }
    }

    return (
        <List>
            {movies.map(({ id, title }) => (
            <ListItem key={id}>
                <HiFilm size="14" />
                <MovieLink to={getCorrectHref(id)} state={{from: location}}>{title}</MovieLink>
            </ListItem>
            ))}
        </List>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        title: PropTypes.string.isRequired
    }))
}