import { ThemeProvider } from "styled-components";
import { Header } from "./layoutData/Header/index";
import { theme } from "./common/theme";
import { Aside } from "./layoutData/Aside/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Aside />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
