import styled from "styled-components";

export const MainBox = styled.div`
  display: grid;
  grid-column-start: auto;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  padding: 20px;
  grid-gap: 5px;
  overflow-y: scroll;
`;

export const Tile = styled.div`
  border: none;
  border-radius: 3px;
  background-color: teal;
  max-width: 450px;
  height: 200px;
`;
