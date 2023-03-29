import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../common/svg/spinner.svg";

export const SpinnerWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 219px;
  max-width: 1920px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    margin-top: 24px;
  }
`;

const rotate = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const StyledSpinner = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 35px;
    height: 35px;
  }
`;
