import { selectUser } from "../../redux/auth/auth.selector";
import { useAppSelector } from "../../redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: React.FC = () => {
  const user = useAppSelector(selectUser);
  return user ? <Outlet /> : <Navigate to="login" replace />;
};
