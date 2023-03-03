import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { selectUser } from "../../redux/auth/auth.selector";
import { logoutAction } from "../../redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <Link to="/profile">{user?.login}</Link>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};
