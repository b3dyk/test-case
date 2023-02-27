import React from "react";
import { List, StyledLink } from "./Navigation.styled";

export const Navigation: React.FC = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="login">Log In</StyledLink>
        </li>
        <li>
          <StyledLink to="register">Register</StyledLink>
        </li>
      </List>
    </nav>
  );
};
