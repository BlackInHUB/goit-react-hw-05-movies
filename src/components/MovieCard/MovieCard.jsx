import PropTypes from 'prop-types'
import { Box } from "components/Box"
import { useLocation } from "react-router-dom";
import { AddInfo } from "components/AddInfo/AddInfo";
import { GoBackLink, ArrowLeftIcon } from "./MovieCard.styled"
import { MovieInfo } from "components/MovieInfo/MovieInfo";

export const MovieCard = ({ data }) => {
    const location = useLocation();  
    const goBacklink = location.state?.from ?? '/movies'

    return (
        <>
            <Box p={4} borderBottom="3px solid grey">
                <GoBackLink to={goBacklink}><ArrowLeftIcon size="18" />Go back</GoBackLink>
                <MovieInfo movies={data} />
            </Box>
            <AddInfo />
        </>
    )
}

MovieCard.propTypes = {
    data: PropTypes.object.isRequired
}