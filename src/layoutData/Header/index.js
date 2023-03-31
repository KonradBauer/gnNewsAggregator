import { HeaderBox, LogoBox, ButtonView, LogoWrapper, ButtonsWrapper, ButtonPopup } from "./styled";
import logo from "../../common/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { changeView, selectModal, selectView, toggleModal } from "../../features/newsSlice";
import { Modal } from "../Modal";

export const Header = () => {
  const dispatch = useDispatch();
  const viewStatus = useSelector(selectView);
  const modalStatus = useSelector(selectModal);

  return (
    <HeaderBox>
      <LogoWrapper to="/">
        <LogoBox source={logo} alt="logo" />
      </LogoWrapper>
      <ButtonsWrapper>
        <ButtonView onClick={() => dispatch(changeView())}>
          View: {viewStatus === false ? "List" : "Tiles"}
        </ButtonView>
        <ButtonPopup onClick={() => dispatch(toggleModal())}>
          Modal {modalStatus && <Modal />}
        </ButtonPopup>
      </ButtonsWrapper>
    </HeaderBox>
  );
};
