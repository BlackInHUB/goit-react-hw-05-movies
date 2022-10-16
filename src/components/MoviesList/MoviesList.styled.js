import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const ListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.list};
  color: ${p => p.theme.colors.black};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const MovieLink = styled(Link)`
  margin-left: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
`;
