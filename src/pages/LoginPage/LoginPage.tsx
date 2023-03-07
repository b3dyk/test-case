import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import { loginAction } from "../../redux/auth/auth.slice";
import { Heading, StyledForm, Wrapper } from "./LoginPage.styled";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    try {
      if (login !== "admin" || password !== "12345")
        throw new Error("Invalid login data");
      dispatch(loginAction({ login, password }));

      Notify.success(`${t("welcome")} ${login}`, {
        position: "center-top",
      });
      navigate("/profile");
    } catch (error) {
      console.log(error);

      Notify.failure(t("check"), {
        position: "center-top",
      });
    }
  };

  return (
    <Wrapper>
      <Heading>{t("loginText")}</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label={t("formLogin")}
          variant="outlined"
          type="text"
          name="login"
          value={login}
          onChange={({ target: { value } }) => setLogin(value)}
        />

        <TextField
          id="outlined-basic"
          label={t("password")}
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />

        <Button variant="contained" type="submit">
          {t("login")}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default LoginPage;
