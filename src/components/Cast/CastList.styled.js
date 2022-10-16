import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ListItemImg = styled.img`
  width: 128px;
  height: auto;
`;

export const ActorName = styled.p`
  font-size: ${p => p.theme.fontSizes.pretitle};
`;
