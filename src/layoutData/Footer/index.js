import { ArticleCounter, DateContainer, FooterBox } from "./styled";
import { useSelector } from "react-redux";
import { selectTotalResults } from "../../features/newsSlice";
import { useState, useEffect } from "react";

export const Footer = () => {
  const totalNews = useSelector(selectTotalResults);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const time = new Date();
      setTime(time.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <FooterBox>
      <DateContainer>{`Time is: ${time}`}</DateContainer>
      <ArticleCounter>Count of articles: {totalNews}</ArticleCounter>
    </FooterBox>
  );
};
