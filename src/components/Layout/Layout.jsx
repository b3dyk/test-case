import { Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectLoginToken } from 'redux/auth/auth.selectors';
import {
  Header,
  HeaderWrapper,
  Item,
  List,
  SideBar,
  StyledLink,
  Wrapper,
} from './Layout.styled';

export const Layout = () => {
  const token = useSelector(selectLoginToken);

  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <Link to="/">Home</Link>
            <Navigation />
          </HeaderWrapper>
        </Container>
      </Header>
      <main>
        <Container>
          <Wrapper>
            <SideBar>
              <List>
                <Item>
                  <StyledLink to="/">Home Page</StyledLink>
                </Item>
                {token && (
                  <Item>
                    <StyledLink to="contacts">Contacts</StyledLink>
                  </Item>
                )}
              </List>
            </SideBar>

            <Outlet />
          </Wrapper>
        </Container>
      </main>
    </>
  );
};
