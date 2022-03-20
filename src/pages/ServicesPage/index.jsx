import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ServicePageContainer } from "./styles";
import home from "../../assets/svg/home.svg";
import BottomNavigator from "../../components/BottomNavigator";

import CardBox from "../../components/CardBox";

const ServicesPage = () => {
  return (
    <ServicePageContainer>
      {/* <Container>
        <h1>
          Bem vindo ao <span>PROWORKING</span>
        </h1>
        <p>Encontre o serviço que você precisa aqui!</p>
        <Input isSearch />
        <Button />
        <img src={home} alt="homeimg" />
      </Container> */}
      <h1>Todos os serviços</h1>
      <CardBox/>

    </ServicePageContainer>
  );
};

export default ServicesPage;
