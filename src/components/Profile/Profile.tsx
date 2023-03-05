import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { selectUser } from "../../redux/auth/auth.selector";
import { logoutAction } from "../../redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Wrapper } from "./Profile.styled";

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutAction());

    Notify.info(t("goodbye"), { position: "center-top" });
  };

  return (
    <Wrapper>
      <p>{user?.login}</p>
      <Button variant="outlined" color="error" onClick={handleLogout}>
        {t("logout")}
      </Button>
    </Wrapper>
  );
};
