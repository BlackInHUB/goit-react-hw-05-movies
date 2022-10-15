import { Box } from "components/Box"
import { useLocation } from "react-router-dom";
import { AddInfo } from "components/AddInfo/AddInfo";
import {MoviePoster, GoBackLink, ArrowLeftIcon} from "./MovieCard.styled"

export const MovieCard = ({ data }) => {
    const location = useLocation();  
    const { title, poster_path, overview, genres, vote_average } = data;
    const posterSrc = `https://image.tmdb.org/t/p/w500${poster_path}`
    const movieGenres = [...genres.map(genre => genre.name)].join(', ')
    const userScore = ((vote_average / 10) * 100).toFixed()
    const goBacklink = location.state?.from ?? '/movies'

    return (
        <>
            <Box p={4} borderBottom="3px solid grey">
                <GoBackLink to={goBacklink}><ArrowLeftIcon size="18" />Go back</GoBackLink>
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
            </Box>
            <AddInfo />
        </>
    )

    
}