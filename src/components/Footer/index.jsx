import { Link } from "react-router-dom";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Link to="/aboutus">SOBRE NÓS</Link>
      <Link to="/how">COMO FUNCIONA?</Link>
    </Container>
  );
};

export default Footer;
