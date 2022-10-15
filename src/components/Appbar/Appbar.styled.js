import styled from 'styled-components';
import { HiOutlineFilm, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: ${p => p.theme.space[5]}px;
  box-shadow: 0px 1px 5px 2px ${p => p.theme.colors.grey};
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.title};
  font-weight: ${p => p.theme.fontWeights.bold};

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const HomeIcon = styled(HiHome)`
  vertical-align: top;
`;

export const MoviesIcon = styled(HiOutlineFilm)`
  vertical-align: top;
`;
