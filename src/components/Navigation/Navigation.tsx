import { Link } from "react-router-dom";
import icon from "../../images/logo.png";
import { useTranslation } from "react-i18next";

import { Item, List, NavBar, StyledLink } from "./Navigation.styled";

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
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
        <Item>
          <StyledLink to="/profile">{t("profile")}</StyledLink>
        </Item>
      </List>
    </NavBar>
  );
};
