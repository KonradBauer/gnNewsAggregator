import { ThemeProvider } from "styled-components";
import { Header } from "./layoutData/Header/index";
import { theme } from "./common/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
