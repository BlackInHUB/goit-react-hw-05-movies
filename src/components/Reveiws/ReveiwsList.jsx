import PropTypes from 'prop-types'
import { List, ListItem, AuthorName } from "./ReveiwsList.styled";

export const ReviewsList = ({reviews}) => {

    return (
        <List>
        {reviews.map(({ id, author, content }) =>
            <ListItem key={id}>
                <AuthorName>Author: {author}</AuthorName>
                <p>{content}</p>
            </ListItem>)}
        </List>
    )
}

ReviewsList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired)
}