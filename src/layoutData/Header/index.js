import {
  HeaderBox,
  LogoBox,
  ButtonView,
  LogoWrapper,
  ButtonsWrapper,
  ButtonPopup,
  ButtonLanguage,
} from "./styled";
import logo from "../../common/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  changeView,
  selectLanguage,
  selectModal,
  selectView,
  toggleLanguage,
  toggleModal,
} from "../../features/newsSlice";
import { Modal } from "../Modal";

export const Header = () => {
  const dispatch = useDispatch();
  const viewStatus = useSelector(selectView);
  const modalStatus = useSelector(selectModal);
  const languageStatus = useSelector(selectLanguage);

  return (
    <HeaderBox>
      <LogoWrapper to="/">
        <LogoBox source={logo} alt="logo" />
      </LogoWrapper>
      <ButtonsWrapper>
        <ButtonView onClick={() => dispatch(changeView())}>
          {languageStatus === false ? "View:" : "Widok:"}
          {viewStatus === false
            ? languageStatus === false
              ? " List"
              : " Lista"
            : languageStatus === false
            ? " Tiles"
            : " Kafelki"}
        </ButtonView>
        <ButtonPopup onClick={() => dispatch(toggleModal())}>
          Modal {modalStatus && <Modal />}
        </ButtonPopup>
        <ButtonLanguage onClick={() => dispatch(toggleLanguage())}>
          {languageStatus === false ? "Language" : "Język"}:{" "}
          {languageStatus === false ? "ENG" : "PL"}{" "}
        </ButtonLanguage>
      </ButtonsWrapper>
    </HeaderBox>
  );
};
