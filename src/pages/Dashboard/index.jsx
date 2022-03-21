import {
  Container,
  ContainerAdicionarServicos,
  ContainerCheckin,
  ContainerContact,
  ContainerEmail,
  ContainerImage,
  ContainerNamePicture,
  ContainerRegisterProfession,
  ContainerWhatsapp,
  ContainerDad,
} from "./styles";
import picture from "../../assets/profile 1.png";
import pictureWhatsapp from "../../assets/Whatsapp.png";
import pictureEmail from "../../assets/Email.png";
import pictureBusiness from "../../assets/svg/Business_SVG.svg";
import { useAuthenticated } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const {authenticated} = useAuthenticated()

  if(authenticated===false){
    return <Redirect to={'/'}/>
  }

  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <ContainerDad>
          <ContainerAdicionarServicos>
            <ContainerNamePicture>
              <h3>USER 1</h3>
              <img src={picture} alt="Foto de perfil" />
            </ContainerNamePicture>
            <ContainerRegisterProfession>
              <p>Insira a baixo os serviços que voce realiza</p>
              <ul>
                <li>Serviços gerais</li>
                <li>Auxiliar de pedreiro</li>
                <li className="inputClasse">
                  <input
                    className="inputService"
                    type="text"
                    placeholder="Adicione suas profissões"
                  />
                </li>
              </ul>
            </ContainerRegisterProfession>
            <ContainerContact>
              <ContainerWhatsapp>
                <img src={pictureWhatsapp} alt="Logo WhatsApp" />
                <input type="text" placeholder="Insira seu WhatsApp" />
              </ContainerWhatsapp>
              <ContainerEmail>
                <img src={pictureEmail} alt="Logo Email" />
                <input type="text" placeholder="example@example.com" />
              </ContainerEmail>
              <ContainerCheckin>
                <input className="checkin" type="checkbox" />
                <p>
                  Deixe esta caixa selecionada se deseja que os serviços
                  prestados por você apareçam nos resultados das buscas.
                </p>
              </ContainerCheckin>
            </ContainerContact>
          </ContainerAdicionarServicos>
          <ContainerImage>
            <img src={pictureBusiness} alt="Imagem ilustrativa" />
          </ContainerImage>
        </ContainerDad>
      </Container>
    </>
  );
};

export default Dashboard;
