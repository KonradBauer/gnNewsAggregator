import { selectLanguage } from "../../features/newsSlice";
import { Content, Popup } from "./styled";
import { useSelector } from "react-redux";

export const Modal = () => {
  const languageStatus = useSelector(selectLanguage);

  return (
    <Popup>
      <Content>
        {languageStatus === false
          ? "The most hard part of this task was a API implementation and the biggest pleasure it was a modal implementation, because i never did it before. It was new to me, but thanks to this i learned something new!"
          : "Największą trudnością w zadaniu była implementacja API, a największą frajdę czerpałem podczas robienia okienek pop-up, ponieważ nigdy wcześniej tego nie robiłem. Była to dla mnie nowość, ale dzięki temu nauczyłem się czegoś nowego!"}
      </Content>
    </Popup>
  );
};
