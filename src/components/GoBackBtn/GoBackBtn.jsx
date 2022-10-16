import { useLocation } from "react-router-dom"
import { GoBackLink, ArrowLeftIcon } from "./GoBackBtn.styled"

export const GoBackBtn = () => {
    const location = useLocation();
    const goBacklink = location.state?.from ?? '/movies'

    return (
        <GoBackLink to={goBacklink}><ArrowLeftIcon size="18" />Go back</GoBackLink>
    )
}