import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { Container } from "./layoutData/Container/styled";
import { Footer } from "./layoutData/Footer";
import { Header } from "./layoutData/Header";
import { Main } from "./layoutData/Main";
import { fetchNews, countryChange, selectNewsStatus } from "./features/newsSlice";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AsideBox, Li, List, StyledNavLink } from "./layoutData/Aside/styled.js";
import { Loading } from "./layoutData/Loading/index";
import Flag from "react-world-flags";
import { WelcomePage } from "./layoutData/WelcomePage";

function App() {
  const dispatch = useDispatch();

  const handleFetchPl = () => {
    dispatch(countryChange("pl"));
    dispatch(fetchNews());
  };

  const handleFetchAr = () => {
    dispatch(countryChange("ar"));
    dispatch(fetchNews());
  };

  const handleFetchJp = () => {
    dispatch(countryChange("jp"));
    dispatch(fetchNews());
  };

  const handleFetchIt = () => {
    dispatch(countryChange("it"));
    dispatch(fetchNews());
  };

  const handleFetchUs = () => {
    dispatch(countryChange("us"));
    dispatch(fetchNews());
  };

  const handleFetchFr = () => {
    dispatch(countryChange("fr"));
    dispatch(fetchNews());
  };

  const status = useSelector(selectNewsStatus);

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Container>
          <Header />
          <AsideBox>
            <List>
              <StyledNavLink onClick={handleFetchPl} to="/country/poland">
                <Li>
                  <Flag code={"PL"} height="16" /> Poland
                </Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchAr} to="/country/argentina">
                <Li>
                  <Flag code={"AR"} height="16" /> Argentina
                </Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchJp} to="/country/japan">
                <Li>
                  <Flag code={"JPN"} height="16" /> Japan
                </Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchIt} to="/country/italy">
                <Li>
                  <Flag code={"IT"} height="16" /> Italy
                </Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchUs} to="/country/us">
                <Li>
                  <Flag code={"USA"} height="16" width="26" />
                  United States
                </Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchFr} to="/country/france">
                <Li>
                  <Flag code={"FR"} height="16" /> France
                </Li>
              </StyledNavLink>
            </List>
          </AsideBox>
          <Switch>
            <Route path="/country/poland">{status === "loading" ? <Loading /> : <Main />}</Route>
            <Route path="/country/argentina">{status === "loading" ? <Loading /> : <Main />}</Route>
            <Route path="/country/japan">{status === "loading" ? <Loading /> : <Main />}</Route>
            <Route path="/country/italy">{status === "loading" ? <Loading /> : <Main />}</Route>
            <Route path="/country/us">{status === "loading" ? <Loading /> : <Main />}</Route>
            <Route path="/country/france">{status === "loading" ? <Loading /> : <Main />}</Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
