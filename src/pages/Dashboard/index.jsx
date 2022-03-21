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

const Dashboard = () => {
  const [List, setList] = useState([]);

  const addTodo = (todo) => {
    setList([...List, todo]);
  };

  const handleTodo = (todo) => {
    const filterTodo = List.filter((filterTodo) => filterTodo !== todo);

    setList(filterTodo);
  };

  console.log(List);
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  console.log("formvalues", formValues);

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
                <img src={pictureWhatsapp} alt="Logo WhatsApp" />
                <input type="text" placeholder="Insira seu WhatsApp" />
              </ContainerWhatsapp>
              <ContainerEmail>
                <img src={pictureEmail} alt="Logo Email" />
                <input type="text" placeholder="example@example.com" />
              </ContainerEmail>

              <div className="labelStates">
                <label>Selecione os estados que voce atende:</label>

                <DropDownBrazilianStates
                  id="state"
                  name="state"
                  onChange={handleInputChange}
                ></DropDownBrazilianStates>
              </div>
              <div className="labelCities">
                <label>Selecione as cidades que voce atende:</label>
                <DropDownBrazilianCities
                  id="city"
                  name="city"
                  state={formValues.state}
                  onChange={handleInputChange}
                ></DropDownBrazilianCities>
              </div>

              <ContainerDescription>
                <label for="w3review">Breve descrição de seus serviços:</label>

                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea>
              </ContainerDescription>
              <ContainerCheckin>
                <input classeName="checkin" type="checkbox" />
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
