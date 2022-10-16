import PropTypes from 'prop-types'
import { Box } from "components/Box"
import { MoviePoster } from "./MovieInfo.styled"

export const MovieInfo = ({ movies }) => {
    const { title, poster_path, overview, genres, vote_average } = movies;
    const movieGenres = [...genres.map(genre => genre.name)].join(', ')
    const userScore = (vote_average * 10).toFixed()
    
    let posterSrc = `https://image.tmdb.org/t/p/w500${poster_path}`
    if (poster_path === null) {
        posterSrc = `https://qqcinema.com/wp-content/uploads/no-poster.png`
    }

    return (
        <Box display="flex" mt={4}>
            <MoviePoster src={posterSrc} />
            <Box ml={4}>
                <h1>{title}</h1>
                <p>User score: {userScore}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{movieGenres}</p>
            </Box>
        </Box>
    )
}

MovieInfo.propTypes = {
    movies: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        })).isRequired,
        vote_average: PropTypes.number.isRequired
    }).isRequired
}