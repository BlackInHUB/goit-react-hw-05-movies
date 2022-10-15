import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageTitle = styled.h2`
  margin-left: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.list};
  color: ${p => p.theme.colors.grey};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const TrendingLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.grey};
`;
