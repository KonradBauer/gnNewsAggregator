import { useSelector } from "react-redux";
import { selectCountry, selectNewsData, selectNewsStatus } from "../../features/newsSlice";
import { MainBox, Tile } from "./styled";

export const Main = () => {
  const country = useSelector(selectCountry);
  const news = useSelector(selectNewsData);
  const status = useSelector(selectNewsStatus);
  return (
    <MainBox>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </MainBox>
  );

  // <>
  //   {news.map(({ source, author, title, description, url, urlToImage, publishedAt, content }) => (
  //     <MainBox key={publishedAt}>
  //       <div>Source: {(source.name, source.id)}</div>
  //       <div>Author: {author}</div>
  //       <div>Title: {title}</div>
  //       <div>Description: {description}</div>
  //       <div>URL: {url}</div>
  //       <div>URL to Image: {urlToImage}</div>
  //       <div>Published At: {publishedAt}</div>
  //       <div>Content: {content}</div>
  //     </MainBox>
  //   ))}
  // </>
};
