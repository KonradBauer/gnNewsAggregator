import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
  padding: 20px;
  border-radius: 5px;
  max-height: 500px;
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 220px;
  }
`;

export const Content = styled.div`
  width: 90%;
`;

export const Author = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

export const Url = styled.a`
  text-decoration: underline;
  margin-top: 30px;
  width: 100%;
  font-size: 12px;
  word-break: break-all;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    word-break: brak-all;
    max-width: 220px;
    font-size: 10px;
  }
`;
