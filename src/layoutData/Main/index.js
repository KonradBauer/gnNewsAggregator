import { useSelector, useDispatch } from "react-redux";
import {
  selectNewsData,
  selectNewsModal,
  selectNewsStatus,
  selectView,
  toggleNewsModal,
} from "../../features/newsSlice";
import { Tile, PublishedAt, MainBox, Source, Title, Image, Description } from "./styled";
import { NewsModal } from "../NewsModal/index";
import { useState } from "react";

export const Main = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNewsData);
  const status = useSelector(selectNewsStatus);
  const viewStatus = useSelector(selectView);
  const modalStatus = useSelector(selectNewsModal);
  const [id, setId] = useState();

  return (
    <>
      {status === "loading" ? (
        ""
      ) : (
        <>
          {viewStatus ? (
            <MainBox>
              {news &&
                news.map(({ source, title, description, urlToImage, publishedAt }, index) => (
                  <div key={title}>
                    <Tile
                      onClick={() => {
                        setId(index);
                        dispatch(toggleNewsModal());
                      }}
                    >
                      {urlToImage ? (
                        <Image source={urlToImage ? urlToImage : null} alt={title} />
                      ) : null}
                      <Title>{title}</Title>
                      <Description>{description}</Description>
                      <Source>{source.name}</Source>
                      <PublishedAt>{publishedAt}</PublishedAt>
                    </Tile>
                  </div>
                ))}
              {modalStatus && <NewsModal articleId={id} />}
            </MainBox>
          ) : (
            <MainBox list>
              {news &&
                news.map(({ source, title, publishedAt }, index) => (
                  <div key={title}>
                    <Tile
                      list
                      onClick={() => {
                        setId(index);
                        dispatch(toggleNewsModal());
                      }}
                    >
                      <Title list>{title}</Title>
                      <Source list>{source.name}</Source>
                      <PublishedAt list>{publishedAt}</PublishedAt>
                    </Tile>
                  </div>
                ))}
              {modalStatus && <NewsModal articleId={id} />}
            </MainBox>
          )}
        </>
      )}
    </>
  );
};
