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
        <LogoBox source={logo} alt="logo" />
      </LogoWrapper>
      <ButtonsWrapper>
        <ButtonView onClick={() => dispatch(changeView())}>
          View: {viewStatus === false ? "List" : "Tiles"}
        </ButtonView>
        <ButtonPopup>Modal</ButtonPopup>
      </ButtonsWrapper>
    </HeaderBox>
  );
};
