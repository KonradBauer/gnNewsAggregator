import styled from "styled-components";

export const MainBox = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.white};
  border-radius: 3px;
  padding: 20px;
  grid-gap: 3px;
  overflow-y: scroll;
`;
