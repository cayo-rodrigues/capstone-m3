import { ServicePageContainer, SearchCity } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const ServicesPage = () => {
  const { workers, refreshWorkers } = useWorkers();

  const [filterWorkers, setFilterWorkers] = useState(workers);
  const [search, setSearch] = useState("");

  const [searchTitle, setSearchTitle] = useState("");

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    refreshWorkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (text) => {
    const userInput = text
      .toLowerCase()
      .split(" ")
      .filter((elem) => elem !== " " || elem !== "")
      .join(" ");

    setClicked(true);
    setSearchTitle(userInput)
    setFilterWorkers(
      workers.filter(worker=>worker.is_active).filter(
        (worker)=>worker.user.name.toLowerCase().includes(userInput) ||
          worker.summary.toLowerCase().includes(userInput) ||
          worker.cities.filter(
            ({ state, city }) =>
              city.toLowerCase().includes(userInput) ||
              state.toLowerCase().includes(userInput)
          ).length ||
          worker.occupation_areas.filter((occupation) =>
            occupation.toLowerCase().includes(userInput)
          ).length
     )
    );
  };

  return (
    <>
      <SearchCity>
        <div data-aos="zoom-in" className=" container">
          <h1>Pesquisar</h1>
          <div className="linha"></div>
          <div className="inputDiv">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
                if(e.target.value.length===0) handleSearch('')
              }}
              placeholder="Pesquisar cidade ou serviço"
            />
            <button onClick={() => handleSearch(search)}>
              <AiOutlineSearch />
            </button>
          </div>
          {searchTitle && clicked && <span>Pesquisa para "{search}"</span>}
        </div>
      </SearchCity>

      <ServicePageContainer>
        <h2>Todos os serviços</h2>
        <CardBox workers={filterWorkers.filter(({ is_active }) => is_active)} />
      </ServicePageContainer>
    </>
  );
};

export default ServicesPage;
