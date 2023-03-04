import React from "react";
import { useTranslation } from "react-i18next";
import { List, StyledLink } from "./Navigation.styled";

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <List>
        <li>
          <StyledLink to="login">{t("login")}</StyledLink>
        </li>
      </List>
    </nav>
  );
};
