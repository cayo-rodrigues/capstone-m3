import Card from "../Card";
import { Container } from "./styles";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


const CardBox = ({workers}) => {


  return (
    <Container>
      {workers.filter(worker=>worker.is_worker && worker.cities ).map((pessoa, index) => (
        <Card 
          id={pessoa.id}
          key={pessoa.id}
          img={''}
          nome={pessoa.name}
          especialidades={pessoa.occupation_areas}
          locais={pessoa.cities}
        />
      ))}
    </Container>
  );
};

export default CardBox;
