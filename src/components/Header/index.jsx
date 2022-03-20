import { Container, ContainerHeader, Nav } from "./styles";

import Button from "../Button/index.jsx";
import logo from "../../assets/svg/logoProWorking 2.svg";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import BurgerMenuLink from "../BurgerMenuLink";
import { useAuthenticated } from "../../providers/authenticated";
import { toast } from "react-toastify";

import {FiLogIn} from 'react-icons/fi'


const Header = ({ className }) => {
  const history = useHistory();
  const location = useLocation();
  const { authenticated,setAuthenticated } = useAuthenticated();

  const logOut = ()=>{
    localStorage.clear()
    toast('Você se deslogou')
    setAuthenticated(false)
    location.pathname === "/dashboard" && history.push("/")
  }

  return (
    <Container currentPage={location.pathname}>
      <ContainerHeader>
        <BurgerMenu>
          <BurgerMenuLink onClick={()=>window.scrollTo(0,0)} to="/services">Serviços</BurgerMenuLink>
          {authenticated ? (
            <>
            <BurgerMenuLink onClick={()=>window.scrollTo(0,0)} to="/dashboard">Dashboard</BurgerMenuLink>
            <BurgerMenuLink to="/" onClick={logOut}>Logout</BurgerMenuLink>
            </>
          ) : (
            <>
              <BurgerMenuLink to="/login">Login</BurgerMenuLink>
              <BurgerMenuLink to="/register">Cadastre-se</BurgerMenuLink>
            </>
          )}
        </BurgerMenu>
        <figure>
          <img src={logo} alt="Logo" onClick={() =>{
            window.scrollTo(0,0)
            history.push("/")
            }
          } 
          />
        </figure>
        <Nav>
          <Link
            className={location.pathname === "/services" ? "currentPage" : ""}
            //onClick={() => history.push("/services")}
            onClick={()=>window.scrollTo(0,0)}
            to={'/services'}
          >
            Serviços
          </Link>
          <Link
            className={location.pathname === "/aboutus" ? "currentPage" : ""}
            //onClick={() => history.push("/aboutus")}
            onClick={()=>window.scrollTo(0,0)}
            to={'/aboutus'}
          >
            Sobre Nós
          </Link>
          {authenticated ? (
            <>
              <Link
                className={location.pathname === "/dashboard" ? "currentPage" : ''}
                //onClick={() => history.push("/dashboard")}
                onClick={()=>window.scrollTo(0,0)}
                to={'/dashboard'}
                >
                Dashboard
              </Link>
              <Button 
                onClick={logOut}
              >
                Logout
              </Button>
            
            </>
          ) : (
            <>
              <Button
                className={location.pathname === "/login" ? "currentPage" :''}
                onClick={() =>{
                  window.scrollTo(0,0)
                  history.push("/login")
                }}
                
              >
              Login
              </Button>
              <Button
                className={location.pathname === "/register" ? "currentPage" :''}
                onClick={() =>{
                   history.push("/register")
                   window.scrollTo(0,0)
                }}
              >
                Cadastre-se
              </Button>
            </>
          )}
        </Nav>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
