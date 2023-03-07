import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import {
  Footer,
  Header,
  HeaderWrapper,
  Select,
  Wrapper,
} from "./Layout.styled";
import { useTranslation } from "react-i18next";

import { Login } from "../Login/Login";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/auth/auth.selector";
import { Profile } from "../Profile/Profile";
import { langs } from "../../i18next/langs";
import { Container } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";

export const Layout: React.FC = (): ReactElement => {
  const { t, i18n } = useTranslation();
  const user = useAppSelector(selectUser);

  const onLanguageChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = evt.target;
    i18n.changeLanguage(value);
  };

  return (
    <Wrapper>
      <Header>
        <Container>
          <HeaderWrapper>
            <Navigation />

            {user ? <Profile /> : <Login />}

            <Select
              name="language"
              onChange={onLanguageChange}
              value={localStorage.getItem("i18nextLng") ?? "en"}
            >
              {Object.keys(langs).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </Select>
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
