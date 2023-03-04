import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  border-bottom: 1px solid transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
`;

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

export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
  background-color: var(--color-bg-secondary);
  border-top: 1px solid transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
