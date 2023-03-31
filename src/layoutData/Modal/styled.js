import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
  padding: 20px;
  border-radius: 5px;
  height: auto;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 220px;
  }
`;
