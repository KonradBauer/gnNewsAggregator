import { HeaderBox, LogoBox, ButtonView, LogoWrapper, ButtonsWrapper, ButtonPopup } from "./styled";
import logo from "../../common/images/logo.png";

export const Header = () => {
  return (
    <HeaderBox>
      <LogoWrapper>
        <LogoBox>
          <img src={logo} width="130" height="" alt="logo" />
        </LogoBox>
      </LogoWrapper>
      <ButtonsWrapper>
        <ButtonView>View</ButtonView>
        <ButtonPopup>Modal</ButtonPopup>
      </ButtonsWrapper>
    </HeaderBox>
  );
};
