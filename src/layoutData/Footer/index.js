import { ArticleCounter, DateContainer, FooterBox } from "./styled";
import { useSelector } from "react-redux";
import { selectLanguage, selectTotalResults } from "../../features/newsSlice";
import { useState, useEffect } from "react";

export const Footer = () => {
  const totalNews = useSelector(selectTotalResults);
  const languageStatus = useSelector(selectLanguage);

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
      <DateContainer>
        {languageStatus === false ? "Time is:" : "Aktualny czas:"} {time}
      </DateContainer>
      <ArticleCounter>
        {languageStatus === false ? "Count of articles:" : "Liczba artukułów:"} {totalNews}
      </ArticleCounter>
    </FooterBox>
  );
};
