import { Box } from "components/Box";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieByIdCredits } from "services/getMovies";
import { CastList } from "components/Cast/CastList";

const Cast = () => {
    const { id } = useParams();
    const [movieCast, setMovieCast] = useState(null);

    useEffect(() => {
        getMovieByIdCredits(id).then(setMovieCast)
    }, [id])

    if (!movieCast) {
        return;
    }

    return (
        <Box Box p={4} borderBottom="3px solid grey">
            <CastList data={movieCast} />
        </Box>
    )
}

export default Cast;