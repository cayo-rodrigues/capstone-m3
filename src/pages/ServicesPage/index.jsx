import { ServicePageContainer } from "./styles";

import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";
import { useEffect } from "react";

const ServicesPage = () => {
  const { workers, refreshWorkers } = useWorkers();

  useEffect(() => {
    refreshWorkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ServicePageContainer>
      <h1>Todos os serviços</h1>
      <CardBox workers={workers.filter(({ is_active }) => is_active)} />
    </ServicePageContainer>
  );
};

export default ServicesPage;
