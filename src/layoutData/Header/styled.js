import styled from "styled-components";

export const HeaderBox = styled.div`
  grid-column-start: span 3;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
`;

export const LogoBox = styled.div`
  margin-top: 5px;
  margin-left: 60px;
`;
