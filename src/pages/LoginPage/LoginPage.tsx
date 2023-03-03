import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/auth/auth.slice";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    try {
      dispatch(loginAction({ email, password }));
    } catch (error) {
      alert("Invalid email or password. Please try again");
    }
  };

  return (
    <Container>
      <div>
        <h2>Please Log In</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
