import { Link } from "react-router-dom";
import { DashboardContainer } from "./style";

import Cadastro from "../../../assets/svg/cadastrar-ou-atualizar.svg";
import VerAnúncios from "../../../assets/svg/see-all-jobs.svg";
import CriarAnuncios from "../../../assets/svg/create.svg";
import { Redirect } from "react-router-dom";
import { useAuthenticated } from "../../../providers/authenticated";
import { useEffect } from "react";

const DashboardHomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const profile = JSON.parse(localStorage.getItem("@ProWorking:user"));

  const { authenticated } = useAuthenticated();

  if (!authenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <DashboardContainer>
      <h1>Seja bem vindo {profile.user.name}!! 😊 </h1>
      <h2>O que você deseja?</h2>
      <ul>
        <Link to={"/dashboard/service-register"}>
          <li>
            <img src={Cadastro} alt="Cadastrar" />
            <div>
              <h3>Cadastrar serviço ou Atualizar perfil</h3>
            </div>
          </li>
        </Link>

        <Link to={"/dashboard/jobs-register"}>
          <li>
            <img src={CriarAnuncios} alt="Criar serviço" />
            <div>
              <h3>Criar Anúncio para Contratar Alguém</h3>
            </div>
          </li>
        </Link>

        <Link to={"/dashboard/all-jobs"}>
          <li>
            <img src={VerAnúncios} alt="Ver anúncios" />
            <div>
              <h3>Ver seus anúncios de Serviço</h3>
            </div>
          </li>
        </Link>
      </ul>
    </DashboardContainer>
  );
};
export default DashboardHomePage;
