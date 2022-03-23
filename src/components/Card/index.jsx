import { Container } from "./styles";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import DefaultUserImg from "../../assets/profile 1.png";
import { Link } from "react-router-dom";

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

const Card = ({ nome, especialidades, locais, id }) => {
  return (
    <Container>
      <section data-aos="fade-in" data-aos-delay="150" id={id}>
        <div className="titleAndImg">
          <h2 className="title">{nome}</h2>
          <img src={DefaultUserImg} alt="Imagem" />
        </div>

        <ul className="occupation_areas">
          {especialidades.slice(0, 2).map((especialidade, index) => (
            <li key={index}>{especialidade}</li>
          ))}
          {especialidades.length > 2 && <li>...</li>}
        </ul>

        <ul className="location">
          <p>Locais de atendimento:</p>
          {locais.slice(0, 2).map((local, index) => (
            <li className="locationDiv" key={`${local}-${index}`}>
              {local.state}- {local.city}
            </li>
          ))}
        </ul>
        <p className="link">
          <Link
            to={`/services/${id}/${nome}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            Ver o perfil Completo
          </Link>
        </p>
      </section>
    </Container>
  );
};

export default Card;
