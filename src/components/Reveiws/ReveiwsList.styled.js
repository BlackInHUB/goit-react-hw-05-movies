import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const AuthorName = styled.p`
  font-size: ${p => p.theme.fontSizes.pretitle};
`;
