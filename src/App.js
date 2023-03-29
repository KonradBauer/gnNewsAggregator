import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { Container } from "./layoutData/Container/styled";
import { Footer } from "./layoutData/Footer";
import { Header } from "./layoutData/Header";
import { Main } from "./layoutData/Main";
import { useEffect } from "react";
import { fetchNews, countryChange } from "./features/newsSlice";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { AsideBox, Li, List, StyledNavLink } from "./layoutData/Aside/styled.js";
import { LogoWrapper } from "./layoutData/Header/styled";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);

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

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Container>
          <Header />
          <AsideBox>
            <List>
              <StyledNavLink onClick={handleFetchPl} to="/country/poland">
                <Li>Poland</Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchAr} to="/country/argentina">
                <Li>Argentina</Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchJp} to="/country/japan">
                <Li>Japan</Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchIt} to="/country/italy">
                <Li>Italy</Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchUs} to="/country/us">
                <Li>United States</Li>
              </StyledNavLink>
              <StyledNavLink onClick={handleFetchFr} to="/country/france">
                <Li>France</Li>
              </StyledNavLink>
              <StyledNavLink>
                <LogoWrapper />
              </StyledNavLink>
            </List>
          </AsideBox>
          <Switch>
            <Route path="/country/poland"></Route>
            <Route path="/country/argentina"></Route>
            <Route path="/country/japan"></Route>
            <Route path="/country/italy"></Route>
            <Route path="/country/us"></Route>
            <Route path="/country/france"></Route>
          </Switch>
          <Main />
          <Footer />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
