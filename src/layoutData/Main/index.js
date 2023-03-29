import { useSelector } from "react-redux";
import { selectCountry, selectNewsData, selectNewsStatus } from "../../features/newsSlice";
import { MainBox, NewsTile, Tile } from "./styled";

export const Main = () => {
  const news = useSelector(selectNewsData);
  const status = useSelector(selectNewsStatus);

  return (
    <MainBox>
      {news
        ? news.map(
            ({ id, url, source, author, title, description, urlToImage, publishedAt, content }) => (
              <div className="news-tile">
                <div className="news-tile-image">
                  <img src={urlToImage} alt={title} />
                </div>
                <div className="news-tile-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>{content}</p>
                  <div className="news-tile-meta">
                    <span>{source.name}</span>
                    <span>{author}</span>
                    <span>{publishedAt}</span>
                  </div>
                </div>
              </div>
            )
          )
        : ""}
    </MainBox>
  );
};
