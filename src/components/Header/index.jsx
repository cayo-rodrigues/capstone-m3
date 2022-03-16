import { Button, Container, ContainerHeader, Nav } from "./styles";
import logo from "../../assets/logoProWorking 2.svg";
import { useHistory } from "react-router-dom";

const Header = ({ className }) => {
  const history = useHistory();
  const authenticated = false; //Autenticação feita para teste
  
  return (
    <Container>
      <ContainerHeader>
        <figure>
          <img src={logo} alt="Logo" onClick={() => history.push("/")} />
        </figure>
        <Nav>
          <Button
            className={`Button-${className}`}
            onClick={() => history.push("/home")}
          >
            Serviços
          </Button>
          {authenticated ? (
            <Button
              className={`Button-${className}`}
              onClick={() => history.push("/dashboard")}
            >
              Dashboard
            </Button>
          ) : (
            <>
              <Button
                className={`Button-${className}`}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
              <Button
                className={`Button-${className}`}
                onClick={() => history.push("/register")}
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
