import styled from "styled-components";

export const HeaderBox = styled.div`
  grid-column-start: span 3;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  margin-right: 30px;
`;

export const LogoBox = styled.div`
  margin-top: 5px;
  margin-left: 30px;
  max-width: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 3px;
  }
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
  background: none;
  color: ${({ theme }) => theme.color.shark};
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: scale(1.01);
  }
`;
