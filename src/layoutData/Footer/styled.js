import styled from "styled-components";

export const FooterBox = styled.div`
  grid-column-start: span 3;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DateContainer = styled.div`
  font-weight: bold;
`;

export const ArticleCounter = styled.div`
  font-weight: bold;
`;
