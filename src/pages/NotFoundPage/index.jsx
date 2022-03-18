import { Container, ImgContainer } from "./styles";
import Img404 from "../../assets/svg/404.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Oops, houve algum problema</h2>
        <ImgContainer>
          <img src={Img404} alt="404" />
        </ImgContainer>
      </Container>
      <Footer/>
    </>
  );
};

export default NotFoundPage;
