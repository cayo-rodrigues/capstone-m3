import { FooterContainer } from "./styles";
import logo from "../../assets/svg/logoProWorking 2.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillMail
} from "react-icons/ai";
import {GoLocation} from 'react-icons/go'
import { useLocation } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


const Footer = () => {
  const location = useLocation()

  return (
    <FooterContainer currentPage={location.pathname} >
      <div data-aos="fade-up" className="footer__box">
        <figure className="footer-logo">
          <img src={logo} alt="logo" />
          <div className="footer-logo-socialicon">
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillFacebook />
          </div>
        </figure>

        <div  data-aos="fade-up" data-aos-delay='150' className="footer-pages">
          <ul>
            <li>
              <Link to="/"  onClick={()=>window.scrollTo(0,0)}>Home</Link>{" "}
            </li>
            
            <li>
              <Link to="/login"  onClick={()=>window.scrollTo(0,0)}>Login</Link>{" "}
            </li>
            <li>
              <Link to="/register"  onClick={()=>window.scrollTo(0,0)}>Cadastro</Link>{" "}
            </li>
            <li>
              <Link to="/services"  onClick={()=>window.scrollTo(0,0)}>Services</Link>{" "}
            </li>
            <li>
              <Link to="/aboutus" onClick={()=>window.scrollTo(0,0)}>Sobre nós</Link>{" "}
            </li>
            <li>
              <Link to="/how"  onClick={()=>window.scrollTo(0,0)}>Como funciona</Link>{" "}
            </li>
          </ul>
        </div>

        <div  data-aos="fade-up" data-aos-delay='250' className="footer-contato">
          <ul>
            <li>
              <AiFillPhone /> (99)99999-9999
            </li>
            <li>
              <AiFillMail /> cavalo@mail.com.com.com
            </li>
            <li> <GoLocation/> Curitiba, Paraná </li>
            <li> Kenzie Academy Brasil </li>

          </ul>
        </div>

        <div  data-aos="fade-up" data-aos-delay='350' className="footer-button">
          <Button>Entre em contato</Button>
        </div>
      </div>
      <p>Desenvolvido por ProWorking 💜 | &copy; 2022 Todos os direitos Reservados </p>
    </FooterContainer>
  );
};

export default Footer;
