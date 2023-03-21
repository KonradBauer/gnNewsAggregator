import styled from "styled-components";

export const Box = styled.div`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 5px;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.deepSeaGreen};
  border-radius: 10px;
  -webkit-box-shadow: 22px 19px 31px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 22px 19px 31px -7px rgba(0, 0, 0, 1);
  box-shadow: 22px 19px 31px -7px rgba(0, 0, 0, 1);
`;
