import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

export const AddTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.pretitle};
`;

export const AddList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AddListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ArrowRightIcon = styled(HiOutlineArrowSmRight)`
  vertical-align: top;
`;
