import { HeaderBox, LogoBox } from "./styled";
import logo from "../../common/images/logo.png";

export const Header = () => {
  return (
    <HeaderBox>
      <LogoBox>
        <img src={logo} width="130" height="" alt="logo" />
      </LogoBox>
    </HeaderBox>
  );
};
