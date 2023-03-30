import { useSelector } from "react-redux";
import { selectNewsData, selectNewsStatus } from "../../features/newsSlice";
import { DataList, Tile, PublishedAt, MainBox, Source, Title, Image } from "./styled";

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
                <Tile>
                  <div key={content}>
                    <Image>{urlToImage ? <img src={urlToImage} alt={title} /> : null}</Image>
                    <Title>{title}</Title>
                    {/* <p>{description}</p>
                    <p>{content}</p> */}
                    <Source>{source.name}</Source>
                    {/* <span>{author}</span> */}
                    <PublishedAt>{publishedAt}</PublishedAt>
                  </div>
                </Tile>
              )
            )}
        </MainBox>
      )}
    </>
  );
};
