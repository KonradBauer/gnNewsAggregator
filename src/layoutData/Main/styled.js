import styled from "styled-components";

export const MainBox = styled.div`
  display: grid;
  grid-column-start: span 2;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  grid-gap: 5px;
`;

export const Tile = styled.div`
  border: none;
  border-radius: 3px;
  background-color: teal;
  max-width: 450px;
  height: 200px;
`;
