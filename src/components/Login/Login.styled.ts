import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  margin-left: auto;
  margin-right: 24px;
`;

export const StyledLink = styled(NavLink)`
  color: var(--color-text-primary);
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;
  transition: color var(--anim), background-color var(--anim);

  :hover {
    background-color: var(--color-accent);
    color: #fff;
  }
  &.active {
    background-color: var(--color-accent);
    color: #fff;
  }
`;
