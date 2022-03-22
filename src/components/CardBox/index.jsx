import Card from "../Card";
import { Container } from "./styles";

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

const CardBox = ({ workers }) => {
  return (
    <Container>
      {workers.map((worker) => (
        <Card
          id={worker.id}
          key={worker.id}
          img={""}
          nome={worker.user.name}
          especialidades={worker.occupation_areas}
          locais={worker.cities}
        />
      ))}
    </Container>
  );
};

export default CardBox;
