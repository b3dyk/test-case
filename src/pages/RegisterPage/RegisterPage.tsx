// import { Button, Container, TextField } from "@mui/material";
import { Container } from "@mui/material";
// import { useReducer, useState } from "react";
// import { Link } from "react-router-dom";
// import { authLogin } from "redux/auth/auth.operations";
// import { useAppDispatch } from "../../redux/hooks";
// import { Form, Wrapper } from "./RegisterPage.styled";

// interface IState {
//   name: string;
//   email: string;
//   password: string;
// }

// interface IAction {
//   type: string;
//   payload: string;
// }

// const initState: IState = {
//   name: "",
//   email: "",
//   password: "",
// };

// const formReducer = (state: IState, { type, payload }: IAction): IState => {
//   return (state = { ...state, [type]: payload });
// };

const RegisterPage: React.FC = () => {
  //   const dispatch = useAppDispatch();
  //   const [state, reducerDispatch] = useReducer(formReducer, initState);
  //   const [isLoading, setIsLoading] = useState(false);

  //   const handleChange = ({
  //     target: { name, value },
  //   }: React.ChangeEvent<HTMLInputElement>): void => {
  //     reducerDispatch({ type: name, payload: value });
  //   };

  //   const handleSubmit = async (
  //     evt: React.FormEvent<HTMLInputElement>
  //   ): Promise<void> => {
  //     evt.preventDefault();
  //     try {
  //       setIsLoading(true);
  //       await publicApi.post("/users/signup", state);
  //       await dispatch(
  //         authLogin({ email: state.email, password: state.password })
  //       ).unwrap();
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //   };

  return (
    <Container>
      {/* <Wrapper>
        <h2>Join our community</h2>
        <Form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            required
            value={state.name}
            onChange={handleChange}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            required
            value={state.email}
            onChange={handleChange}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            required
            helperText="At least 7 characters, one capital, one number"
            value={state.password}
            onChange={handleChange}
          />
          <Link to="/login">Already have account</Link>

          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </Form>
      </Wrapper>
      {isLoading && <p>Loading...</p>} */}
    </Container>
  );
};

export default RegisterPage;
