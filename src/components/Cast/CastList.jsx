import PropTypes from 'prop-types'
import { Box } from "components/Box"
import { List, ListItem, ListItemImg, ActorName } from "./CastList.styled"

export const CastList = ({ data }) => {

    const getCorrectPhoto = (profile_path) => {
        if (profile_path !== null) {
            return `https://image.tmdb.org/t/p/w500${profile_path}`
        } else {
            return 'https://ht.ksdr1.net/wp-content/uploads/sites/3/2016/06/no-picture-available-icon-8.png'
        }
    }

    return (
        <List>
            {data.map(({id, name, character, profile_path
            }) =>
                <ListItem key={id}>
                    <ListItemImg src={getCorrectPhoto(profile_path)} loading="lazy" />
                    <Box ml={5}>
                        <ActorName>Actor name: {name}</ActorName>
                        <p>Character: {character}</p>
                    </Box>
                </ListItem>)}
        </List>
    )
}

CastList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
        profile_path: PropTypes.string
    }))
}