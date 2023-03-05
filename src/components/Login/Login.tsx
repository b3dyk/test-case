import React from "react";
import { useTranslation } from "react-i18next";
import { StyledLink, Wrapper } from "./Login.styled";

export const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledLink to="login">{t("login")}</StyledLink>
    </Wrapper>
  );
};
