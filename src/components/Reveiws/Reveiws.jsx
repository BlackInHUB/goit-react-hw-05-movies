import { Box } from "components/Box";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieByIdReviews } from "services/getMovies";
import { ReviewsList } from "./ReveiwsList";

const Reveiws = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        getMovieByIdReviews(id).then(setReviews)
    }, [id])

    if (!reviews) {
        return
    }

    return (
        <Box p={4} borderBottom="3px solid grey">
            {reviews.length === 0 ? <p>We don't have any reviews for this movie...</p> : <ReviewsList reviews={reviews}/>}
        </Box>
    )
    
}

export default Reveiws;