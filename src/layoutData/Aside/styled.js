import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AsideBox = styled.div`
  grid-column-start: span 1;
  background-color: ${({ theme }) => theme.color.shark};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: span 0.5;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin-top: 50px;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    margin-right: 5px;
    padding: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 8px;
  }
`;

export const Li = styled.li`
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;

  &:focus {
    font-weight: bold;
  }
`;
