import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { Aside } from "./layoutData/Aside";
import { Container } from "./layoutData/Container/styled";
import { Footer } from "./layoutData/Footer";
import { Header } from "./layoutData/Header";
import { Main } from "./layoutData/Main";
import { useEffect } from "react";
import { fetchNews } from "./features/newsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Aside />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
