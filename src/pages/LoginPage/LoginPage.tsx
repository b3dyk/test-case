import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { loginAction } from "../../redux/auth/auth.slice";

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    try {
      if (login !== "admin" || password !== "12345")
        throw new Error("Invalid login data");
      dispatch(loginAction({ login, password }));
    } catch (error) {
      alert(t("check"));
    }
  };

  return (
    <Container>
      <div>
        <h2>{t("loginText")}</h2>
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
