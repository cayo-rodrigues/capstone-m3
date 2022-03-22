import { ServicePageContainer } from "./styles";

import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";
import { useEffect } from "react";

const ServicesPage = () => {
  const { workers, refreshWorkers } = useWorkers();

  useEffect(() => {
    refreshWorkers();
  }, []);

  return (
    <ServicePageContainer>
      <h1>Todos os serviços</h1>
      <CardBox workers={workers} />
    </ServicePageContainer>
  );
};

export default ServicesPage;
