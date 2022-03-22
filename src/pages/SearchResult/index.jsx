import { ServicePageContainer } from "./style";

import CardBox from "../../components/CardBox";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";
import { useEffect } from "react";

const SearchResults = () => {
  const { search } = useParams();
  const { workers, queryWorkers } = useWorkers();

  useEffect(() => {
    queryWorkers(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ServicePageContainer>
      <h1>Resultados para a pesquisa "{search}" </h1>
      <CardBox workers={workers} />
    </ServicePageContainer>
  );
};

export default SearchResults;
