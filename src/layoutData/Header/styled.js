import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBox = styled.div`
  grid-column-start: span 3;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  margin-right: 30px;
`;

export const LogoBox = styled.img.attrs((props) => ({ src: props.source }))`
  margin-top: 5px;
  margin-left: 30px;
  max-width: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 3px;
    width: 100%;
  }
`;

export const ButtonView = styled.button`
  border: none;
  padding: 10px;
  background: none;
  color: ${({ theme }) => theme.color.shark};
  font-weight: bold;
  cursor: pointer;

  &:active {
    color: hsl(230, 7%, 26%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

export const ButtonPopup = styled.button`
  border: none;
  padding: 10px;
  background: none;
  color: ${({ theme }) => theme.color.shark};
  font-weight: bold;
  cursor: pointer;

  &:active {
    color: hsl(230, 7%, 26%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

export const ButtonLanguage = styled.button`
  border: none;
  padding: 10px;
  background: none;
  color: ${({ theme }) => theme.color.shark};
  font-weight: bold;
  cursor: pointer;

  &:active {
    color: hsl(230, 7%, 26%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;
