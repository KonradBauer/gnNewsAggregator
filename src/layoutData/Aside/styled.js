import styled from "styled-components";

export const Box = styled.div`
  max-width: 200px;

  margin-top: 5px;
  height: 450px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.bunker};
  border-radius: 10px;
`;
