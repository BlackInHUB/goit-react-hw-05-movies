import {AddTitle, AddLink, AddList, AddListItem, ArrowRightIcon} from './AddInfo.styled'
import { Box } from "components/Box"
import { useLocation } from 'react-router-dom'

export const AddInfo = () => {
    const location = useLocation();

    return (
        <Box p={4} borderBottom="3px solid grey">
            <AddTitle>Additional information</AddTitle>
            <AddList>
                <AddListItem>
                    <ArrowRightIcon  size="18"/>
                    <AddLink to={'cast'} state={{from: location}}>Cast</AddLink>
                </AddListItem>
                <AddListItem>
                    <ArrowRightIcon  size="18"/>
                    <AddLink to={'reviews'}>Reviews</AddLink>
                </AddListItem>
            </AddList>
        </Box>
    )
}