import styled from "styled-components";

export const HeaderBox = styled.div`
  grid-column-start: span 3;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  display: flex;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 750px;
`;

export const LogoBox = styled.div`
  margin-top: 5px;
  margin-left: 60px;
  max-width: 130px;
`;

export const ButtonView = styled.button`
  border: none;
  padding: 10px;
  background: none;
  color: ${({ theme }) => theme.color.shark};
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: scale(1.01);
  }
`;

export const ButtonPopup = styled.button`
  border: none;
  padding: 10px;
  margin-left: 30px;
  background: none;
  color: ${({ theme }) => theme.color.shark};
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: scale(1.01);
  }
`;
