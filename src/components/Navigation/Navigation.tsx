import React from "react";
import { useTranslation } from "react-i18next";
import { StyledLink, Wrapper } from "./Navigation.styled";

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledLink to="login">{t("login")}</StyledLink>
    </Wrapper>
  );
};
