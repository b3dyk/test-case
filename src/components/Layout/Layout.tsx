import React, { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import icon from "../../images/logo.png";
import {
  Header,
  HeaderWrapper,
  Item,
  List,
  SideBar,
  StyledLink,
  Wrapper,
} from "./Layout.styled";
import { useTranslation } from "react-i18next";

import { Navigation } from "../Navigation/Navigation";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/auth/auth.selector";
import { Profile } from "../Profile/Profile";
import { langs } from "../../i18next/langs";
import { Button, ButtonGroup } from "@mui/material";

export const Layout: React.FC = (): ReactElement => {
  const { t, i18n } = useTranslation();
  const user = useAppSelector(selectUser);

  return (
    <>
      <Header>
        <div>
          <HeaderWrapper>
            <Link to="/">
              <img src={icon} alt="home" width="150" />
            </Link>
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
            {user ? <Profile /> : <Navigation />}
          </HeaderWrapper>
        </div>
      </Header>
      <main>
        <div>
          <Wrapper>
            <SideBar>
              <List>
                <Item>
                  <StyledLink to="/">{t("homePage")}</StyledLink>
                </Item>
                {user && (
                  <Item>
                    <StyledLink to="/news">{t("news")}</StyledLink>
                  </Item>
                )}
              </List>
            </SideBar>
            <div>
              <Outlet />
            </div>
          </Wrapper>
        </div>
      </main>
    </>
  );
};
