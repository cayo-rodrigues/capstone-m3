import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "./styles";

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSearch = (text) => {
    history.push(`/services/${text}`);
  };

  return (
    <Container>
      <div data-aos="fade-left" className="inputDiv">
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSearch(search)}
          onChange={(e) => setSearch(e.target.value.trim())}
          placeholder="Pesquisar"
        />
        <button onClick={() => handleSearch(search)}>
          <AiOutlineSearch />
        </button>
      </div>
    </Container>
  );
};

export default SearchBar;
