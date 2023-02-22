import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  margin-bottom: 32px;
  padding: 24px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 6px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  display: inline-block;
  margin-left: 8px;
  width: 200px;
  height: 30px;
  border: 1px solid #296d98;
  border-radius: 4px;
  padding-left: 8px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #0d6efd;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  transition: background-color 250ms ease;

  :hover,
  :focus {
    background-color: #0b5ed7;
  }
`;
