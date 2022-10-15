import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';

export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[1]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 2px 1px grey;
`;

export const ArrowLeftIcon = styled(HiArrowSmLeft)`
  vertical-align: top;
`;

export const MoviePoster = styled.img`
  width: 256px;
  height: auto;
`;
