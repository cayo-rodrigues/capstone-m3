import Card from "../Card";
import { Container } from "./styles";

const CardBox = ({ workers }) => {
  return (
    <Container data-aos="fade-in" data-aos-delay="150">
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
