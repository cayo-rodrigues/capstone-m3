import { Container, ContainerHeader, Nav } from "./styles";

import Button from "../Button/index.jsx";
import logo from "../../assets/svg/logoProWorking 2.svg";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthenticated } from "../../providers/authenticated";

const Header = ({ className }) => {
    const history = useHistory();
    const location = useLocation();
    const { authenticated } = useAuthenticated();

    return (
        <Container>
            <ContainerHeader>
                <figure>
                    <img
                        src={logo}
                        alt='Logo'
                        onClick={() => history.push("/")}
                    />
                </figure>
                <Nav>
                    <Button
                        className={
                            location.pathname === "/home" && "currentPage"
                        }
                        onClick={() => history.push("/home")}>
                        Serviços
                    </Button>
                    {authenticated ? (
                        <Button
                            className={
                                location.pathname === "/dashboard" &&
                                "currentPage"
                            }
                            onClick={() => history.push("/dashboard")}>
                            Dashboard
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={
                                    location.pathname === "/login" &&
                                    "currentPage"
                                }
                                onClick={() => history.push("/login")}>
                                Login
                            </Button>
                            <Button
                                className={
                                    location.pathname === "/register" &&
                                    "currentPage"
                                }
                                onClick={() => history.push("/register")}>
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
