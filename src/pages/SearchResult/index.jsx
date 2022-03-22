import { ServicePageContainer } from "./style";

import CardBox from "../../components/CardBox";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";
import { useEffect } from "react";
import { useState } from "react";

const SearchResults = () => {
  const { workers } = useWorkers();
  const { search } = useParams();
  console.log(workers);
  const filteredWorkers = workers.filter(
    (worker) =>
      worker.is_worker &&
      worker.cities &&
      worker.occupation_areas.some((area) => area.includes(search))
  );
  return (
    <ServicePageContainer>
      <h1>Resultados para a pesquisa {search} </h1>
      <CardBox workers={filteredWorkers} />
    </ServicePageContainer>
  );
};

export default SearchResults;
