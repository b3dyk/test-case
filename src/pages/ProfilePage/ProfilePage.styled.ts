import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.aside`
  min-height: 50vh;
  min-width: 200px;
  background-color: var(--color-bg-secondary);
  padding: 36px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  padding: 8px;
  border-radius: 4px;
  transition: color var(--anim), background-color var(--anim);
  cursor: pointer;

  :hover,
  :focus {
    background-color: var(--color-btn-main);
    color: var(--color-text-hover);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
