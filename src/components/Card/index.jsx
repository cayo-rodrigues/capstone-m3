import { Container } from "./styles";
import whatsapp from "../../assets/Whatsapp.png";
import email from "../../assets/Email.png";

const Card = ({ nome, img, especialidades }) => {
  return (
    <Container>
      <section>
        <div>
          <h2>{nome}</h2>
          <img src={img} alt="Imagem" />
        </div>

        <ul>
          {especialidades.map((especialidade, index) => {
            if (index < 4) {
              return <li>{especialidade}</li>;
            }
            if(index === 4){
              return <p>...</p>
            }
          })}
        </ul>
        <span>
          <button>
            <img src={email} alt="" />
          </button>
          <button>
            <img src={whatsapp} alt="" />
          </button>
        </span>
      </section>
    </Container>
  );
};

export default Card;
