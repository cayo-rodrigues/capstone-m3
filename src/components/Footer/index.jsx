import { Link } from "react-router-dom";
import { Container } from "./styles";
import kenzie from "../../assets/images/logoblue.png";

const Footer = () => {
  return (
    <Container>
      <Link to="/aboutus">SOBRE NÓS</Link>
      <Link to="/how">COMO FUNCIONA?</Link>
      <p>
        <img src={kenzie} alt="kenzielogo" /> Ⓒ Kenzie Academy Brasil
      </p>
    </Container>
  );
};

export default Footer;
