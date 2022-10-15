import { Header, Navigation, NavItem, HomeIcon, MoviesIcon } from 'components/Appbar/Appbar.styled';


export const Appbar = () => {
    return (
        <Header>
        <Navigation>
            <NavItem to={'home'}><HomeIcon size="28" />Home</NavItem>
            <NavItem to={'movies'}><MoviesIcon size="28" />Movies</NavItem>
        </Navigation>
        </Header>
    )
}