import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-bottom: 16px;
  border-bottom: 1px solid transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
`;

export const Select = styled.select`
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  padding: 8px;
  color: var(--color-form);
  border-color: var(--color-form);

  :focus-within {
    outline: 1px solid transparent;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  background-color: var(--color-bg-secondary);
  border-top: 1px solid transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
