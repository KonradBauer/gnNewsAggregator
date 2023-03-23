import { ArticleCounter, DateContainer, FooterBox } from "./styled";
import { useSelector } from "react-redux";
import { selectTotalResults } from "../../features/newsSlice";

export const Footer = () => {
  const totalNews = useSelector(selectTotalResults);

  return (
    <FooterBox>
      <DateContainer>Date</DateContainer>
      <ArticleCounter>Count of articles: {totalNews}</ArticleCounter>
    </FooterBox>
  );
};
