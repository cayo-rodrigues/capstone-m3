import { ServiceContainer } from "./style";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";
import { proWorkingApi } from "../../services/api";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

import Button from "../../components/Button/index.jsx";
import { useAuthenticated } from "../../providers/authenticated";
import { useHistory } from "react-router-dom";
import DefaultUserImg from "../../assets/profile 1.png";
import { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { Redirect } from "react-router-dom";

const ServiceProfilePage = () => {
  const [feed, setFeed] = useState("");
  const { workers } = useWorkers();
  const { id, name } = useParams();
  const { authenticated } = useAuthenticated();
  const [feedbacks, setFeedbacks] = useState([]);
  const [contador, setContador] = useState(0);

  const userLocal = JSON.parse(localStorage.getItem("@ProWorking:user"));
  const profile = userLocal.user;
  const token = userLocal.accessToken;

  const workerProfile = workers.find(
    (worker) => worker.user.name === name && worker.id === Number(id)
  );

  const { occupation_areas, summary, whatsapp, user } = workerProfile;
  const history = useHistory();

  const getApi = () => {
    proWorkingApi.get(`feedbacks?_expand=user&workerId=${+id}`).then((res) => {
      setFeedbacks(res.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const feedbackApi = () => {
    proWorkingApi
      .post(
        "feedbacks",
        {
          userId: profile.id,
          workerId: +id,
          content: feed,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        getApi();
      });
  };

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
        {/* https://wa.me/5524998913379?text=teste */}

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

        <h2>Rating:</h2>

        <h2>Comentários:</h2>
        {feedbacks.map((feedback) => {
          if (feedback.workerId === +id) {
            return (
              <div key={feedback.id} className="comments">
                <div className="profile-pic">
                  <p>{feedback.user.name[0]}</p>
                </div>
                <div className="profile-comment">
                  <h3>{feedback.user.name}</h3>
                  <p>{feedback.content}</p>
                </div>
              </div>
            );
          }
        })}

        <textarea
          maxLength={420}
          onChange={(e) => {
            setFeed(e.target.value);
            setContador(e.target.value.length);
          }}
          placeholder="Deixe seu feedback"
        ></textarea>
        <h4>{contador}/420</h4>
        <div className="botaoSpan">
          <Button
            onClick={(e) => {
              if (authenticated) {
                feedbackApi();
                history.push(`/services/${id}/${name}`);
              } else {
                history.push("/login");
              }
            }}
          >
            Enviar
          </Button>
          <span>Para poder comentar é necessário estar logado</span>
        </div>
      </div>
    </ServiceContainer>
  );
};
export default ServiceProfilePage;
