import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { Aside } from "./layoutData/Aside";
import { Container } from "./layoutData/Container/styled";
import { Footer } from "./layoutData/Footer";
import { Header } from "./layoutData/Header";
import { Main } from "./layoutData/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header></Header>
        <Aside>
          <h2>aside</h2>
        </Aside>
        <Main>
          <h1>main</h1>
        </Main>
        <Footer>
          <h1>footer</h1>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
