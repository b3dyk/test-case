import { useTranslation } from "react-i18next";

import { Container, Item, List, Sidebar, Wrapper } from "./ProfilePage.styled";

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Sidebar>
        <List>
          <Item>{t("personalData")}</Item>
          <Item>{t("services")}</Item>
          <Item>{t("settings")}</Item>
        </List>
      </Sidebar>
      <section>
        <Wrapper>
          <p>{t("pending")}</p>
        </Wrapper>
      </section>
    </Container>
  );
};

export default ProfilePage;
