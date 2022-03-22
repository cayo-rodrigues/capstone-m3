import { ServicePageContainer } from "./styles";

import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";

const ServicesPage = () => {
  const { workers } = useWorkers();
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
      <CardBox workers={workers} />
    </ServicePageContainer>
  );
};

export default ServicesPage;
