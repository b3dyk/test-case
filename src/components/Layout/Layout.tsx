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
import { Navigation } from "../Navigation/Navigation";

export const Layout: React.FC = (): ReactElement => {
  return (
    <>
      <Header>
        <div>
          <HeaderWrapper>
            <Link to="/">
              <img src={icon} alt="home" width="150" />
            </Link>
            <Navigation />
          </HeaderWrapper>
        </div>
      </Header>
      <main>
        <div>
          <Wrapper>
            <SideBar>
              <List>
                <Item>
                  <StyledLink to="/">Home Page</StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/news">News</StyledLink>
                </Item>
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
