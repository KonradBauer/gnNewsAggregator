import { HeaderBox, LogoBox, ButtonView, LogoWrapper, ButtonsWrapper, ButtonPopup } from "./styled";
import logo from "../../common/images/logo.png";

export const Header = () => {
  return (
    <HeaderBox>
      <LogoWrapper to="/start">
        <LogoBox>
          <img src={logo} width="130" alt="logo" />
        </LogoBox>
      </LogoWrapper>
      <ButtonsWrapper>
        <ButtonView>View</ButtonView>
        <ButtonPopup>Modal</ButtonPopup>
      </ButtonsWrapper>
    </HeaderBox>
  );
};
