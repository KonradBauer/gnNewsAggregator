import { useSelector } from "react-redux";
import { selectNewsData, selectNewsStatus } from "../../features/newsSlice";
import { MainBox } from "./styled";

export const Main = () => {
  const news = useSelector(selectNewsData);
  const status = useSelector(selectNewsStatus);

  return (
    <>
      {status === "loading" ? (
        ""
      ) : (
        <MainBox>
          {news &&
            news.map(
              ({
                id,
                url,
                source,
                author,
                title,
                description,
                urlToImage,
                publishedAt,
                content,
              }) => (
                <div key={content}>
                  <div>{urlToImage ? <img src={urlToImage} alt={title} /> : null}</div>
                  <h3>{title}</h3>
                  {/* <p>{description}</p>
                    <p>{content}</p> */}
                  <span>{source.name}</span>
                  {/* <span>{author}</span> */}
                  <span>{publishedAt}</span>
                </div>
              )
            )}
        </MainBox>
      )}
    </>
  );
};
