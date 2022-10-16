import PropTypes from 'prop-types'
import { AddTitle, AddLink, AddList, AddListItem, ArrowRightIcon } from './AddInfo.styled'
import { Box } from "components/Box"

export const AddInfo = ({ location }) => {   
    return (
        <Box pb={4} borderBottom="3px solid grey">
            <AddTitle>Additional information</AddTitle>
            <AddList>
                <AddListItem>
                    <ArrowRightIcon  size="18"/>
                    <AddLink to={'cast'} state={{from: location.state.from}}>Cast</AddLink>
                </AddListItem>
                <AddListItem>
                    <ArrowRightIcon  size="18"/>
                    <AddLink to={'reviews'} state={{ from: location.state.from }}>Reviews</AddLink>
                </AddListItem>
            </AddList>
        </Box>
    )
}

AddInfo.propTypes = {
    location: PropTypes.object.isRequired
}