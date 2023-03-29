import { useSelector } from "react-redux";
import { selectCountry, selectNewsData, selectNewsStatus } from "../../features/newsSlice";
import { MainBox, Tile } from "./styled";

export const Main = () => {
  const country = useSelector(selectCountry);
  const news = useSelector(selectNewsData);
  const status = useSelector(selectNewsStatus);

  return (
    <MainBox>
      {news.map(
        ({ id, url, source, author, title, description, urlToImage, publishedAt, content }) => (
          <Tile
            key={id}
            source={source}
            author={author}
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
            content={content}
          />
        )
      )}
    </MainBox>
  );
};
