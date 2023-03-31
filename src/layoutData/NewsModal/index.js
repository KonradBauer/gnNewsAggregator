import { useDispatch, useSelector } from "react-redux";
import { ModalContent, Modal, Content, Author, Url } from "./styled";
import { selectNewsData, toggleNewsModal } from "../../features/newsSlice";

export const NewsModal = ({ articleId }) => {
  const news = useSelector(selectNewsData);
  const dispatch = useDispatch();

  return (
    <Modal onClick={() => dispatch(toggleNewsModal())}>
      <div key={news[articleId].url}>
        <ModalContent>
          <Content>{news[articleId].content}</Content>
          <Author>{news[articleId].author}</Author>
          <Url>{news[articleId].url}</Url>
        </ModalContent>
      </div>
    </Modal>
  );
};
