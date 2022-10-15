import {AddTitle, AddLink, AddList, AddListItem, ArrowRightIcon} from './AddInfo.styled'
import { Box } from "components/Box"

export const AddInfo = () => {
    return (
        <Box p={4} borderBottom="3px solid grey">
            <AddTitle>Additional information</AddTitle>
            <AddList>
                <AddListItem>
                    <ArrowRightIcon  size="18"/>
                    <AddLink>Cast</AddLink>
                </AddListItem>
                <AddListItem>
                    <ArrowRightIcon  size="18"/>
                    <AddLink>Reviews</AddLink>
                </AddListItem>
            </AddList>
        </Box>
    )
}