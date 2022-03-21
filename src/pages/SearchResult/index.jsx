import { ServicePageContainer } from "./style";
import home from "../../assets/svg/home.svg";
import BottomNavigator from "../../components/BottomNavigator";

import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SearchResults = () => {
    const {workers} = useWorkers()
    const {search} = useParams()

    console.log()
    const filteredWorkers = workers.filter(worker=> worker.occupation_area.includes(search) ) 
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
      <h1>Resultados para a pesquisa {search} </h1>
      <CardBox workers={filteredWorkers}/>

    </ServicePageContainer>
  );
};

export default SearchResults;