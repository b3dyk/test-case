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
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/auth/auth.selector";
import { Profile } from "../Profile/Profile";

export const Layout: React.FC = (): ReactElement => {
  const user = useAppSelector(selectUser);

  return (
    <>
      <Header>
        <div>
          <HeaderWrapper>
            <Link to="/">
              <img src={icon} alt="home" width="150" />
            </Link>
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
                  <StyledLink to="/">Home Page</StyledLink>
                </Item>
                {user && (
                  <Item>
                    <StyledLink to="/news">News</StyledLink>
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
