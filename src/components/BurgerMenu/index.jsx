import { slide as Menu } from "react-burger-menu";
import { Container } from "./styles";
import logo from "../../assets/svg/logoProWorking 2.svg";

const BurgerMenu = ({ children }) => {
  return (
    <Container>
      <Menu>
        <img src={logo} alt="Logo ProWorking" className="bm-logo" />
        {children}
      </Menu>
    </Container>
  );
};

export default BurgerMenu;
