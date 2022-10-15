import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[2]}px;
`;

export const SubmitBtn = styled.button`
  margin: 0;
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[2]}px;
`;
