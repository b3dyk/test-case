import { Container } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  max-width: 500px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`;

export const StyledForm = styled.form`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
