import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  padding: 50px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 8px;
  }
`;

export const Title = styled.h1`
  width: 100%;
`;

export const Message = styled.h2`
  width: 100%;
`;
