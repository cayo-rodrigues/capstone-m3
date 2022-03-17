import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";
import home from "../../assets/svg/home.svg"

const LandingPage = () => {
  return (
    <>
      <Container>
      <img src={home} alt="landing" className="item1"/>
      <div className="item2">
        <h1>
          Bem vindo ao <span>PROWORKING</span>
        </h1>
        <p>Encontre o serviço que você precisa aqui!</p>
        <div className="item3">
        <Input isSearch className="input"/>
        <Button><span>BUSCAR</span></Button>
        </div>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
