import { Message, Title, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/newsSlice";

export const WelcomePage = () => {
  const languageStatus = useSelector(selectLanguage);

  return (
    <Wrapper>
      <Title>
        {languageStatus === false
          ? "Hello! This is gnNews. It's a news aggregator. You can here find actual news from selected countries. Enjoy!"
          : "Witaj! To jest gnNews. Jest to agregator wiadomości. Możesz tutaj znaleźć najnowsze wieści z wybranych krajów. Miłej zabawy!"}
      </Title>
      <Message>{languageStatus === false ? "Select country! 😎" : "Wybierz kraj! 😎"}</Message>
    </Wrapper>
  );
};
