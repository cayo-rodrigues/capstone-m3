import { RatingContainer, ServiceContainer } from "./style";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";

import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

import Button from "../../components/Button/index.jsx";
import { useAuthenticated } from "../../providers/authenticated";

import DefaultUserImg from "../../assets/profile 1.png";
import RatingStars from "../../components/RatingStars";
import { toast } from "react-toastify";
import { useState } from "react";

const ServiceProfilePage = () => {
  const { workers } = useWorkers();
  const { id, name } = useParams();
  const { authenticated } = useAuthenticated();

  const [workerProfile] = useState(
    workers.find(
      (worker) => worker.user.name === name && worker.id === Number(id)
    )
  );

  const [userInfo] = useState(
    JSON.parse(localStorage.getItem("@ProWorking:user")) || {}
  );

  const [userRating] = useState(
    workerProfile.ratings.find(({ userId }) => userId === userInfo.id) || {
      stars: 0,
    }
  );

  const [averageRating] = useState(
    workerProfile.ratings.reduce((acc, rating) => acc + rating.stars, 0) /
      workerProfile.ratings.length
  );

  const { occupation_areas, summary, whatsapp, user } = workerProfile;

  return (
    <ServiceContainer>
      <div className="profile-header">
        <span>
          <RatingStars workerId={+id} value={averageRating || 0} />
        </span>
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
                {workerProfile.cities !== undefined &&
                  workerProfile.cities.map(({ state, city }, index) => (
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

        <div
          className="icon icon-mail"
          onClick={() => {
            const subject = "Anúncio do site Proworking";
            const body = "Gostaria de conversar sobre...";

            window.open(`mailto:${user.email}?subject=${subject}&body=${body}`);
          }}
        >
          <AiOutlineMail /> Envie um Email
        </div>

        <h2>Informações do Perfil</h2>
        <p>
          <strong>Descrição do serviço:</strong> {summary}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <RatingContainer>
          <h2>Como você avalia este profissional?</h2>
          <RatingStars workerId={+id} isEditable value={userRating.stars} />
        </RatingContainer>

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
              toast.error("Faça login para comentar");
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
