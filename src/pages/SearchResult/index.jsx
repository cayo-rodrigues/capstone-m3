import { ServicePageContainer } from "./style";

import CardBox from "../../components/CardBox";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const { workers, refreshWorkers } = useWorkers();
  const { search } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    refreshWorkers();

    const userInput = search.toLowerCase().trim();

    const filteredWorkers = workers.filter(
      (worker) =>
        worker.user.name.toLowerCase().includes(userInput) ||
        worker.summary.toLowerCase().includes(userInput) ||
        worker.cities.filter(
          ({ state, city }) =>
            city.toLowerCase().includes(userInput) ||
            state.toLowerCase().includes(userInput)
        ).length ||
        worker.occupation_areas.filter((occupation) =>
          occupation.toLowerCase().includes(userInput)
        ).length
    );

    setSearchResults(filteredWorkers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ServicePageContainer>
      <h1>Resultados para a pesquisa "{search}" </h1>
      <CardBox workers={searchResults} />
    </ServicePageContainer>
  );
};

export default SearchResults;
