import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  /* list-style: none; */
  list-style-type: circle;
  color: var(--color-accent);
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
`;

export const NewsLink = styled.a`
  display: inline-block;
  padding: 8px;
  text-decoration: none;
  color: var(--color-text-primary);

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const Author = styled.span`
  display: inline-block;
  padding-right: 8px;
  color: var(--color-text-secondary);
`;

export const Button = styled.button`
  display: block;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.75;
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  transition: color var(--anim), background-color var(--anim);

  :hover,
  :focus {
    color: var(--color-btn-main);
    background-color: var(--color-bg-secondary);
  }
`;
