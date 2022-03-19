import { FooterContainer } from "./styles";
import logo from "../../assets/svg/logoProWorking 2.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__box">
        <figure className="footer-logo">
          <img src={logo} alt="logo" />
          <div className="footer-logo-socialicon">
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillFacebook />
          </div>
        </figure>

        <div className="footer-pages">
          <ul>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">Sobre nós</Link>
            </li>
            <li>
              <Link to="/how">Como funciona</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contato">
          <ul>
            <li>
              <AiFillPhone /> (99)99999-9999
            </li>
            <li>
              <AiFillMail /> cavalo@mail.com.com.com
            </li>
            <li>
              {" "}
              <GoLocation /> Curitipa, Paraná
            </li>
            <li> Kenzie Academy Brasil </li>
          </ul>
        </div>

        <div className="footer-button">
          <Button>Entre em contato</Button>
        </div>
      </div>
      <p>
        Desenvolvido por ProWorking 💜 | &copy; 2022 Todos os direitos
        Reservados{" "}
      </p>
    </FooterContainer>
  );
};

export default Footer;
