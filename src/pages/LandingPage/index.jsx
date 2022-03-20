import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Container,
  HowItWorks,
  LandPageContainer,
  VideoSection,
  CategorySection
} from "./styles";

import ConstructionService from "../../assets/svg/Service_icons/servico_construcao.svg"
import HomeService from "../../assets/svg/Service_icons/servico_domestico.svg"
import TeachingService from "../../assets/svg/Service_icons/servicos_de_ensino.svg"
import MecanicService from "../../assets/svg/Service_icons/servicos_de_mecanico.svg"
import FashionService from "../../assets/svg/Service_icons/servicos_moda_beleza.svg"
import TechnologyService from "../../assets/svg/Service_icons/servicos_tecnologia.svg"

import PeopleImg from "../../assets/svg/people_SVG.svg";
import { AiOutlineSearch } from "react-icons/ai";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


const LandingPage = () => {
  return (
    <LandPageContainer>
      <Container>
        <div  data-aos="fade-left"   className="col-left">
          <h1>
            Bem vindo ao <span>PROWORKING</span>
          </h1>
          <p>Encontre o serviço que você precisa aqui!</p>

          <div className="item3">
            <Input isSearch icon={AiOutlineSearch} className="input" />
            <Button heigth="43px">
              <span>BUSCAR</span>
            </Button>
          </div>
        </div>

        <div data-aos="fade-right"   className="col-right"></div>
      </Container>

      <HowItWorks>
        <div className="container">
          <div data-aos="fade-left" className="col-left">
            <img src={PeopleImg} alt="Imagem ilustrativa de pessoas" />
          </div>

          <div data-aos="fade-right" className="col-right">
            <h3>Como o site funciona</h3>
            <h4>É novo por aqui?</h4>
            <p>
              Sem problema, tentaremos explicar brevemente como você pode tirar
              o maior aproveitamento do nosso sistema. A primeira facilidade é
              que você não precisa se cadastrar para utilizar nossa plataforma,
              você pode simplesmente pesquisar por um serviço no qual estiver
              precisando contratar algum profissional bem qualificado, assim que
              visualizar o prestador de seu interesse basta clicar no card
              apresentado e estarão disponíveis alguns botões que facilitarão o
              seu contato direto com essa pessoa. A outra facilidade é que para
              se cadastrar e utilizar o sistema de anúncio das suas habilidades,
              além de ser fácil e rápido é gratuito, você só precisa de um
              email, uma senha que você se lembre e um telefone de preferência
              whatsapp para facilitar o contato das pessoas com você. Simples
              não? E então? Vamos lá utilizar, qualquer dúvida clique no rodapé,
              em "SOBRE NÓS" que estaremos à disposição para ajudar.
            </p>
          </div>
        </div>
      </HowItWorks>

      <VideoSection>

        <iframe
          data-aos="fade-in"
          // width="1077"
          // height="680"
          src="https://www.youtube.com/embed/wzUVgfQQK_4"
          title="Proworkin"
          // frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe> 

      </VideoSection>



      <CategorySection>
        <h3 data-aos="fade-in" > Alguns dos principais serviços </h3>
        <div  className="linha"></div>
        <ul  >
          <li  data-aos-delay="50"data-aos="fade-up"   >
            <img src={ConstructionService} alt='Construção'/>
            <p>Construção</p>
          </li>

          <li  data-aos-delay="250" data-aos="fade-up" >
            <img src={HomeService} alt='Serviços Domésticos'/>
            <p>Serviços Domésticos</p>
          </li>

          <li  data-aos-delay="450" data-aos="fade-up" >
            <img src={TeachingService} alt='Serviços de ensino'/>
            <p>Serviços de ensino</p>
          </li>

          <li  data-aos-delay="650" data-aos="fade-up" >
            <img src={MecanicService} alt='Serviços mecânicos'/>
            <p>Serviços mecânicos</p>
          </li>

          <li  data-aos-delay="850"data-aos="fade-up" >
            <img src={FashionService} alt='Serviços de moda e beleza'/>
            <p>Serviços de moda e beleza</p>
          </li>

          <li  data-aos-delay="1050"data-aos="fade-up" >
            <img src={TechnologyService} alt='Serviços relacionados a tecnologia'/>
            <p>Serviços relacionados a tecnologia</p>
          </li>

        </ul>
      </CategorySection>


    </LandPageContainer>
  );
};

export default LandingPage;
