import {  ServicePageContainer } from "./styles";


import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";


const ServicesPage = () => {
  const { workers } = useWorkers()



  return (
    <ServicePageContainer>

      <h1>Todos os serviços</h1>
      <CardBox workers={workers}/>

    </ServicePageContainer>
  );
};

export default ServicesPage;
