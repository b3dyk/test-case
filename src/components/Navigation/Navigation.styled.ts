import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
`;

export const Item = styled.li`
  border-radius: 4px;
  overflow: hidden;
  transition: color var(--anim), background-color var(--anim);

  :hover {
    background-color: var(--color-btn-main);
    color: #fff;
  }
  :hover a {
    color: #fff;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: var(--color-text-primary);
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
  padding: 8px 16px;
  &.active {
    background-color: var(--color-btn-main);
    color: #fff;
  }
`;
