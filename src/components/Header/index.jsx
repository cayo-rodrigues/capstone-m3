import { Container, ContainerHeader, Nav } from "./styles";

import logo from "../../assets/svg/logoProWorking 2.svg";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import BurgerMenuLink from "../BurgerMenuLink";
import { useAuthenticated } from "../../providers/authenticated";
import { toast } from "react-toastify";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const { authenticated, setAuthenticated } = useAuthenticated();

  const logOut = () => {
    localStorage.clear();
    toast("Você se deslogou");
    setAuthenticated(false);
    location.pathname === "/dashboard" && history.push("/");
  };

  return (
    <Container currentPage={location.pathname}>
      <ContainerHeader>
        <BurgerMenu>
          <BurgerMenuLink to="/services">Serviços</BurgerMenuLink>
          <BurgerMenuLink to="/aboutus">Sobre nós</BurgerMenuLink>
          {authenticated ? (
            <>
              <BurgerMenuLink to="/dashboard">Dashboard</BurgerMenuLink>
              <BurgerMenuLink to={"/"} handleCloseMenu={logOut}>
                Sair
              </BurgerMenuLink>
            </>
          ) : (
            <>
              <BurgerMenuLink to="/login">Entrar</BurgerMenuLink>
              <BurgerMenuLink to="/register">Cadastre-se</BurgerMenuLink>
            </>
          )}
        </BurgerMenu>
        <figure>
          <img
            src={logo}
            alt="Logo"
            onClick={() => {
              history.push("/");
            }}
          />
        </figure>
        <Nav>
          <Link
            className={location.pathname === "/services" ? "currentPage" : ""}
            to={"/services"}
          >
            Serviços
          </Link>
          <Link
            className={location.pathname === "/aboutus" ? "currentPage" : ""}
            to={"/aboutus"}
          >
            Sobre Nós
          </Link>
          {authenticated ? (
            <>
              <Link
                className={
                  location.pathname === "/dashboard" ? "currentPage" : ""
                }
                to={"/dashboard"}
              >
                Dashboard
              </Link>
              <Link to={"/"} onClick={logOut}>
                Sair
              </Link>
            </>
          ) : (
            <>
              <Link
                className={location.pathname === "/login" ? "currentPage" : ""}
                to={"/login"}
              >
                Entrar
              </Link>
              <Link
                className={
                  location.pathname === "/register" ? "currentPage" : ""
                }
                to={"/register"}
              >
                Cadastre-se
              </Link>
            </>
          )}
        </Nav>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
