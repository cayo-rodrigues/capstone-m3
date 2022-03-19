import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import home from "../../assets/svg/home.svg";

const Services = () => {
  return (
    <>
      <Container>
        <h1>
          Bem vindo ao <span>PROWORKING</span>
        </h1>
        <p>Encontre o serviço que você precisa aqui!</p>
        <Input isSearch/>
        <Button />
        <img src={home} alt="homeimg" />
      </Container>
    </>
  );
};

export default Services;
