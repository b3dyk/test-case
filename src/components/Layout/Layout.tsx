import React, { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import icon from "../../images/logo.png";
import {
  Footer,
  Header,
  HeaderWrapper,
  Item,
  List,
  NavBar,
  StyledLink,
  Wrapper,
} from "./Layout.styled";
import { useTranslation } from "react-i18next";

import { Navigation } from "../Navigation/Navigation";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/auth/auth.selector";
import { Profile } from "../Profile/Profile";
import { langs } from "../../i18next/langs";
import { Button, ButtonGroup, Container } from "@mui/material";

export const Layout: React.FC = (): ReactElement => {
  const { t, i18n } = useTranslation();
  const user = useAppSelector(selectUser);

  return (
    <Wrapper>
      <Header>
        <Container>
          <HeaderWrapper>
            <NavBar>
              <Link to="/">
                <img src={icon} alt="home" width="150" />
              </Link>

              <List>
                <Item>
                  <StyledLink to="/">{t("homePage")}</StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/news">{t("news")}</StyledLink>
                </Item>
              </List>
            </NavBar>
            {user ? <Profile /> : <Navigation />}
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              size="small"
              orientation="vertical"
            >
              {Object.keys(langs).map((lang) => (
                <Button
                  type="submit"
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  disabled={i18n.resolvedLanguage === lang}
                >
                  {lang}
                </Button>
              ))}
            </ButtonGroup>
          </HeaderWrapper>
        </Container>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer>
        <Container>
          <p>&#169;{t("copyright")}</p>
        </Container>
      </Footer>
    </Wrapper>
  );
};
