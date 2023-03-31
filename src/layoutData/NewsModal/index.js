import { useSelector } from "react-redux";
import { ModalContent, Modal, Content, Author, Url } from "./styled";
import { selectNewsData } from "../../features/newsSlice";

export const NewsModal = () => {
  const news = useSelector(selectNewsData);

  return (
    <Modal>
      <ModalContent news>
        {news &&
          news.map(({ url, author, content }) => (
            <div key={url}>
              <Content>{content}</Content>
              <Author>{author}</Author>
              <Url>{url}</Url>
            </div>
          ))}
      </ModalContent>
    </Modal>
  );
};
