import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.list};
  color: ${p => p.theme.colors.black};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
`;
