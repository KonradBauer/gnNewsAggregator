import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { Container } from "./layoutData/Container/styled";
import { Footer } from "./layoutData/Footer";
import { Header } from "./layoutData/Header";
import { Main } from "./layoutData/Main";
import { useEffect } from "react";
import { fetchNews } from "./features/newsSlice";
import { HashRouter } from "react-router-dom";
import { AsideBox, Li, List, StyledNavLink } from "./layoutData/Aside/styled.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Container>
          <Header />
          <HashRouter>
            <AsideBox>
              <List>
                <StyledNavLink to="country/poland">
                  <Li>Poland</Li>
                </StyledNavLink>
                <StyledNavLink to="country/argentina">
                  <Li>Argentina</Li>
                </StyledNavLink>
                <StyledNavLink to="country/japan">
                  <Li>Japan</Li>
                </StyledNavLink>
                <StyledNavLink to="country/italy">
                  <Li>Italy</Li>
                </StyledNavLink>
                <StyledNavLink to="country/us">
                  <Li>United States</Li>
                </StyledNavLink>
                <StyledNavLink to="country/france">
                  <Li>France</Li>
                </StyledNavLink>
              </List>
            </AsideBox>
          </HashRouter>
          <Main />
          <Footer />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
