import { HeaderBox, LogoBox, ButtonView, LogoWrapper, ButtonsWrapper, ButtonPopup } from "./styled";
import logo from "../../common/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { changeView, selectView } from "../../features/newsSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const viewStatus = useSelector(selectView);
  console.log(viewStatus);

  return (
    <HeaderBox>
      <LogoWrapper to="/">
        <LogoBox>
          <img src={logo} width="130" alt="logo" />
        </LogoBox>
      </LogoWrapper>
      <ButtonsWrapper>
        <ButtonView onClick={() => dispatch(changeView())}>
          View: {viewStatus === true ? "List" : "Tiles"}
        </ButtonView>
        <ButtonPopup>Modal</ButtonPopup>
      </ButtonsWrapper>
    </HeaderBox>
  );
};
