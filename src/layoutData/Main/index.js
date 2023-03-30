import { useSelector } from "react-redux";
import { selectNewsData, selectNewsStatus, selectView } from "../../features/newsSlice";
import { DataList, Tile, PublishedAt, MainBox, Source, Title, Image } from "./styled";

export const Main = () => {
  const news = useSelector(selectNewsData);
  const status = useSelector(selectNewsStatus);
  const viewStatus = useSelector(selectView);

  return (
    <>
      {status === "loading" ? (
        ""
      ) : (
        <>
          {viewStatus ? (
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
                    <div key={title}>
                      <Tile>
                        {urlToImage ? (
                          <Image source={urlToImage ? urlToImage : null} alt={title} />
                        ) : null}
                        <Title>{title}</Title>
                        {/* <p>{description}</p>
                    <p>{content}</p> */}
                        <Source>{source.name}</Source>
                        {/* <span>{author}</span> */}
                        <PublishedAt>{publishedAt}</PublishedAt>
                      </Tile>
                    </div>
                  )
                )}
            </MainBox>
          ) : (
            <MainBox list>
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
                    <div key={title}>
                      <Tile list>
                        {urlToImage ? (
                          <Image list source={urlToImage ? urlToImage : null} alt={title} />
                        ) : null}
                        <Title list>{title}</Title>
                        {/* <p>{description}</p>
                    <p>{content}</p> */}
                        <Source list>{source.name}</Source>
                        {/* <span>{author}</span> */}
                        <PublishedAt list>{publishedAt}</PublishedAt>
                      </Tile>
                    </div>
                  )
                )}
            </MainBox>
          )}
        </>
      )}
    </>
  );
};
