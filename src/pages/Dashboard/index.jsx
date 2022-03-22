import { Container } from "./styles";
import picture from "../../assets/profile 1.png";

import DropDownBrazilianCities from "../../components/DropDownBrazilianCities";
import DropDownBrazilianStates from "../../components/DropDownBrazilianStates";
import { useState } from "react";
import Form from "../../components/FormService/Form";
import TodoList from "../../components/FormService/TodoList";

import { proWorkingApi } from "../../services/api";

import { useAuthenticated } from "../../providers/authenticated";

import { useWorkers } from "../../providers/workers";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { authenticated } = useAuthenticated();

  const profile = JSON.parse(localStorage.getItem("@ProWorking:user"));
  const token = localStorage.getItem('@ProWorking:token')    

  const [wrongNumber, setWrongNumber]  = useState(false)
  const [error,setError]               = useState(false)
  const [List, setList]                = useState([]);
  const [cityServed, setCityServed]    = useState([]); 
  const [formValues, setFormValues]    = useState({}); 
  const [bio, setBio]                  = useState([]);
  const [whatsapp, setWhatsApp]        = useState([]);
  const [isWorker, setIsWorker]        = useState(false);

  
  const  {refreshWorkers}   = useWorkers()

  const addTodo = (todo) => {
    if(todo.length!==0){
      const arr = [...List,todo]
      setList( [...new Set(arr)] );
    }
  };
  
  const handleTodo = (todo) => {
    const filterTodo = List.filter((filterTodo) => filterTodo !== todo);
    setList(filterTodo);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if(value){
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const registerLocalService = (e) => {
    e.preventDefault();
    if (formValues.state !== undefined) {
      const arr = [...cityServed, formValues]
      setCityServed([...new Set(arr)]);
    }
  };

  const registerBio = (e) => {
    e.preventDefault();
    const biografia = e.target[0].value;
    setBio(biografia);
  };

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

  if (!authenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <>
      <Container>
        <h1>Complete seu cadastro</h1>
        <div className="dadContainer">
          <div className="childContainer">
            <div className="profile">
              <h3>Olá 👋 {profile.name}, atualize ou insira as suas informações</h3>
              <img src={picture} alt="Foto de perfil" />
            </div>
            <div className="profession">
              <p>Insira abaixo os serviços que voce realiza</p>
              <ul>
                <Form addTodo={addTodo} />
              </ul>
            </div>
            <TodoList List={List} handleTodo={handleTodo} />
            <div className="contato">
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
                  className="btn"
                  type="submit"
                  value="Send"
                  onClick={registerLocalService}
                >
                  adicionar
                </button>

                <div className="cidades-registradas">
                  {cityServed.length !== 0 && (
                    <label>Cidades registradas:</label>
                  )}
                  <ul>
                    {cityServed.map((item, index) => {
                      return (
                        <li key={index} value={item}>
                          <button
                            className="btn"
                            onClick={() => {
                              setCityServed(
                                cityServed.filter((elem) => elem !== item)
                              );
                            }}
                          >
                            x
                          </button>
                          {item.city}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </form>

              <div className="description">
                <form onSubmit={registerBio}>
                  <label>Insira seu número de Whatsapp</label>
                  {wrongNumber && <div className="error">Número errado!</div>}
                  <input
                    name="whatsapp"
                    placeholder="whatsapp"
                    onChange={(e) =>{
                      setWhatsApp(e.target.value)
                      if( !!(e.target.value).match(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/) ){
                        setWrongNumber(false)
                      }else{
                        setWrongNumber(true) 
                      }
                      console.log(isNaN(e.target.value)===false)
                    }}
                  />
                  <label htmlFor="w3review">
                    Breve descrição de seus serviços:
                  </label>
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="Escreva uma descrição dos seus serviços"
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                  <input
                    onClick={() => {
                      
                      if (
                        whatsapp.length !== 0 &&
                        List.length !== 0 &&
                        bio.length !== 0 && 
                        wrongNumber===false
                      ) {
                        setError(false)

                        const requisition = {
                          id:profile.id,
                          is_admin:false,
                          is_active:true,
                          is_worker: isWorker,
                          summary: bio,
                          whatsapp: whatsapp,
                          cities: cityServed,
                          occupation_areas: List,
                          userId:profile.id
                        }
                        proWorkingApi.patch(`/users/${profile.id}`,requisition,{
                          headers: {
                            Authorization: `Bearer ${token}`
                          }
                        }).then(()=>{
                          toast.success('Perfil Atualizado')
                          refreshWorkers()
                        }).catch(err=>console.log(err))
                     
                      } else {
                        setError(true);
                      }
                    }}
                    type="submit"
                    value="Atualizar"
                    className="btn"
                  />
                </form>
              </div>
              {error && <div className="error">Falta preencher todos os campos!</div>}
              <div className=" checkin">
                <input
                  className="checkin"
                  type="checkbox"
                  onClick={(e) => setIsWorker(e.target.checked)}
                />
                <p>
                  Deixe esta caixa selecionada se deseja que os serviços
                  prestados por você apareçam nos resultados das buscas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
