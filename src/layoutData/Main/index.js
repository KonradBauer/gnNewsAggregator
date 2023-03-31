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

export const Main = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNewsData);
  const status = useSelector(selectNewsStatus);
  const viewStatus = useSelector(selectView);
  const modalStatus = useSelector(selectNewsModal);

  return (
    <>
      {status === "loading" ? (
        ""
      ) : (
        <>
          {viewStatus ? (
            <MainBox>
              {news &&
                news.map(({ source, title, description, urlToImage, publishedAt }) => (
                  <div key={title}>
                    <Tile onClick={() => dispatch(toggleNewsModal())}>
                      {modalStatus && <NewsModal />}
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
            </MainBox>
          ) : (
            <MainBox list>
              {news &&
                news.map(({ source, title, publishedAt }) => (
                  <div key={title}>
                    <Tile list onClick={() => dispatch(toggleNewsModal())}>
                      {modalStatus && <NewsModal />}
                      <Title list>{title}</Title>
                      <Source list>{source.name}</Source>
                      <PublishedAt list>{publishedAt}</PublishedAt>
                    </Tile>
                  </div>
                ))}
            </MainBox>
          )}
        </>
      )}
    </>
  );
};
