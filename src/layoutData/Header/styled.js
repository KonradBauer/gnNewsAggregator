import styled from "styled-components";

export const Box = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.bunker};
  border-radius: 10px;
`;
