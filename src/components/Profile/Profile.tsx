import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectUser } from "../../redux/auth/auth.selector";
import { logoutAction } from "../../redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <Link to="/profile">{user?.login}</Link>
      <Button onClick={handleLogout}>{t("logout")}</Button>
    </>
  );
};
