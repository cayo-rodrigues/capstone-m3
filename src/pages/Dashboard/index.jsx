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
  ContainerServiceCities,
  ContainerDescription,
} from "./styles";
import picture from "../../assets/profile 1.png";
import pictureWhatsapp from "../../assets/Whatsapp.png";
import pictureEmail from "../../assets/Email.png";
import pictureBusiness from "../../assets/svg/Business_SVG.svg";
import DropDownBrazilianCities from "../../components/DropDownBrazilianCities";
import DropDownBrazilianStates from "../../components/DropDownBrazilianStates";
import { useState } from "react";
import Form from "../../components/FormService/Form";
import TodoList from "../../components/FormService/TodoList";
import { useAuthenticated } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const [List, setList] = useState([]);

  const addTodo = (todo) => {
    setList([...List, todo]);
  };

  const handleTodo = (todo) => {
    const filterTodo = List.filter((filterTodo) => filterTodo !== todo);

    setList(filterTodo);
  };

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [cityServed, setCityServed] = useState([]);

  const registerLocalService = (e) => {
    e.preventDefault();
    const cities = [...cityServed, formValues];
    setCityServed([...new Set(cities)]);
  };

  const [bio, setBio] = useState([]);

  const registerBio = (e) => {
    const biografia = e.target[0].value;

    e.preventDefault();
    setBio(biografia);
  };

  const [whatsapp, setWhatsApp] = useState([]);

  const registerWhatsapp = (e) => {
    e.preventDefault();
    const whats = e.target[0].value;
    setWhatsApp(whats);
  };

  const [email, setEmail] = useState([]);

  const registerEmail = (e) => {
    e.preventDefault();
    const mail = e.target[0].value;
    setEmail(mail);
  };

  const { authenticated } = useAuthenticated();

  if (!authenticated) {
    return <Redirect to={"/"} />;
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
                <TodoList List={List} handleTodo={handleTodo} />
                <Form addTodo={addTodo} />
              </ul>
            </ContainerRegisterProfession>
            <ContainerContact>
              <ContainerWhatsapp>
                <form onSubmit={registerWhatsapp}>
                  <img src={pictureWhatsapp} alt="Logo WhatsApp" />
                  <input type="text" placeholder="Insira seu WhatsApp" />
                  <input onSubmit={registerWhatsapp} type="submit" value="+" />
                </form>
              </ContainerWhatsapp>
              <ContainerEmail>
                <form onSubmit={registerEmail}>
                  <img src={pictureEmail} alt="Logo Email" />
                  <input type="text" placeholder="example@example.com" />
                  <input onSubmit={registerEmail} type="submit" value="+" />
                </form>
              </ContainerEmail>

              <form className="labelStates">
                <label>Selecione o estado que voce atende:</label>

                <DropDownBrazilianStates
                  id="state"
                  name="state"
                  onChange={handleInputChange}
                ></DropDownBrazilianStates>
              </form>
              <form className="labelCities">
                <label>Selecione as cidades que voce atende:</label>
                <DropDownBrazilianCities
                  id="city"
                  name="city"
                  state={formValues.state}
                  onChange={handleInputChange}
                ></DropDownBrazilianCities>
                <button
                  type="submit"
                  value="Send"
                  onClick={registerLocalService}
                >
                  adicionar
                </button>
                <div>
                  <label>Cidades registradas:</label>
                  {cityServed.map((item, index) => {
                    return (
                      <li key={index} value={item}>
                        {item.city}
                      </li>
                    );
                  })}
                </div>
              </form>

              <ContainerDescription>
                <label htmlFor="w3review">
                  Breve descrição de seus serviços:
                </label>
                <form onSubmit={registerBio}>
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                  ></textarea>
                  <input
                    onSubmit={registerBio}
                    type="submit"
                    value="Atualizar"
                  />
                </form>
              </ContainerDescription>
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
