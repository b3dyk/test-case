import homeAnimation from "../../images/homePage.gif";
import { Wrapper } from "./HomePage.styled";

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <img src={homeAnimation} alt="page build in progres" />
    </Wrapper>
  );
};

export default HomePage;
