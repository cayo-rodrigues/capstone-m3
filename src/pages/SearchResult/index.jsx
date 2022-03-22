import { ServicePageContainer } from "./style";

import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { proWorkingApi } from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

const SearchResults = () => {
  const { search } = useParams();
  const [workersList, setWorkersList] = useState([]);

  proWorkingApi
    .get("/workers", {
      params: {
        _expand: "user",
        _embed: "ratings",
        q: search.toLowerCase().trim(),
      },
    })
    .then((res) => {
      setWorkersList(res.data);
    });

  return (
    <ServicePageContainer>
      <h1>Resultados para a pesquisa "{search}" </h1>
      <CardBox workers={workersList} />
    </ServicePageContainer>
  );
};

export default SearchResults;
