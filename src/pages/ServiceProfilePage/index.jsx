import { ServiceContainer } from "./style";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";

import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

import Button from "../../components/Button/index.jsx";
import { useAuthenticated } from "../../providers/authenticated";
import { useHistory } from "react-router-dom";

import DefaultUserImg from "../../assets/profile 1.png";

const ServiceProfilePage = () => {
  const { workers } = useWorkers();
  const { id, name } = useParams();
  const { authenticated } = useAuthenticated();

  const userProfile = workers.find(
    (worker) => worker.user.name === name && worker.id === Number(id)
  );

  const { occupation_areas, summary, whatsapp } = userProfile;
  const { email } = userProfile;
  const history = useHistory();

  return (
    <ServiceContainer>
      <div className="profile-header">
        <span>PROWORKING</span>
        <figure>
          <img src={DefaultUserImg} alt={name} />
        </figure>
      </div>
      <div className="profile-content">
        <div className="profile-tittle">
          <div>
            <h1>Olá 👋, meu nome é {name}</h1>
            <p>{occupation_areas && occupation_areas.join(", ")}</p>
            <div className="cities">
              <ul>
                <h2>Cidades de Atendimento:</h2>
                {userProfile.cities !== undefined &&
                  userProfile.cities.map(({ state, city }, index) => (
                    <li key={`${city}-${index}`} className="locationInfo">
                      {state} {city}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="icon icon-whatsapp"
          onClick={() => {
            const text =
              "Vi seu perfil na Proworking, gostaria de conversar sobre o trabalho";
            const tel = whatsapp
              .split("")
              .filter((letter) => !isNaN(letter) && letter !== " ")
              .join("");

            window.open(`https://wa.me/${tel}?text=${text}`);
          }}
        >
          <AiOutlineWhatsApp /> Fale Comigo
        </div>
        {/* https://wa.me/5524998913379?text=teste */}

        <div
          className="icon icon-mail"
          onClick={() => {
            const subject = "Anúncio do site Proworking";
            const body = "Gostaria de conversar sobre...";

            window.open(`mailto:${email}?subject=${subject}&body=${body}`);
          }}
        >
          <AiOutlineMail /> Envie um Email
        </div>

        <h2>Informações do Perfil</h2>
        <p>
          <strong>Descrição do serviço:</strong> {summary}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>

        <h2>Rating:</h2>

        <h2>Comentários:</h2>

        <div className="comments">
          <div className="profile-pic">
            <p>F</p>
          </div>
          <div className="profile-comment">
            <h3>Fulaninho</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              ullam debitis eaque quae voluptatem enim molestiae! Dolorem
              dignissimos repellendus fugit mollitia non nesciunt laboriosam
              velit, maiores cum, facere eligendi voluptas.
            </p>
          </div>
        </div>
        <div className="comments">
          <div className="profile-pic">
            <p>F</p>
          </div>
          <div className="profile-comment">
            <h3>Fulaninho</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              ullam debitis eaque quae voluptatem enim molestiae! Dolorem
              dignissimos repellendus fugit mollitia non nesciunt laboriosam
              velit, maiores cum, facere eligendi voluptas.
            </p>
          </div>
        </div>

        <textarea placeholder="Deixe seu feedback"></textarea>
        <Button
          onClick={() => {
            if (authenticated) {
            } else {
              history.push("/login");
            }
          }}
        >
          Enviar
        </Button>
      </div>
    </ServiceContainer>
  );
};
export default ServiceProfilePage;
