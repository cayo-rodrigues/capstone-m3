import { ServicePageContainer } from "./style";

import CardBox from "../../components/CardBox";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";
import { useEffect } from "react";
import { useState } from "react";

const SearchResults = () => {
  const { search } = useParams();
  const { workers, refreshWorkers } = useWorkers();
  const [workersList, setWorkersList] = useState([]);

  useEffect(() => {
    refreshWorkers();

    const userInput = search.toLowerCase().trim();

    const filteredWorkers = workers.filter(
      ({ occupation_areas, summary, user }) =>
        summary.toLowerCase().includes(userInput) ||
        user.name.toLowerCase().includes(userInput) ||
        occupation_areas.filter((occupation) =>
          occupation.toLowerCase().includes(userInput)
        ).length
    );

    setWorkersList(filteredWorkers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ServicePageContainer>
      <h1>Resultados para a pesquisa "{search}" </h1>
      <CardBox workers={workersList} />
    </ServicePageContainer>
  );
};

export default SearchResults;
