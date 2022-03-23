import Card from "../Card";
import { Container } from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

const CardBox = ({ workers }) => {
  return (
    <Container>
      {workers.map((worker) => (
        <Card
          id={worker.id}
          key={worker.id}
          nome={worker.user.name}
          especialidades={worker.occupation_areas}
          locais={worker.cities}
        />
      ))}
    </Container>
  );
};

export default CardBox;
