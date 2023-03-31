import styled from "styled-components";

export const FooterBox = styled.div`
  grid-column-start: span 3;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 10px;
  }
`;

export const DateContainer = styled.div`
  font-weight: bold;
  jusify-content: flex-start;
  margin-left: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 2px;
    font-size: 10px;
  }
`;

export const ArticleCounter = styled.div`
  font-weight: bold;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;
