import { selectUser } from "../../redux/auth/auth.selector";
import { useAppSelector } from "../../redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute: React.FC = () => {
  const user = useAppSelector(selectUser);
  console.log(user);

  return user ? <Navigate to="/" replace /> : <Outlet />;
};
