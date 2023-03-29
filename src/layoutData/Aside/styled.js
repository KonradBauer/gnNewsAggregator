import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AsideBox = styled.div`
  grid-column-start: span 1;
  background-color: ${({ theme }) => theme.color.shark};
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Li = styled.li`
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
