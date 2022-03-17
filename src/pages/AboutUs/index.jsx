import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Box, Card, Container } from "./styles";
import us from "../../assets/images/us.svg";
import profile from "../../assets/images/profile.png";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>SOBRE NÓS</h1>
        <img src={us} alt="time" />
        <Box>
          <Card>
            <h1>SCRUM MASTER</h1>
            <h2>GABRIEL ROCHA</h2>
            <h3>Contato: </h3>
            <img src={profile} alt="contact" />
          </Card>
          <Card>
            <h1>TECH LEADER</h1>
            <h2>CAYO RODRIGUES</h2>
            <h3>Contato: </h3>
            <img src={profile} alt="contact" />
          </Card>
          <Card>
            <h1>PRODUCT OWNER</h1>
            <h2>IGOR SOUSA</h2>
            <h3>Contato: </h3>
            <img src={profile} alt="contact" />
          </Card>
          <Card>
            <h1>QUALITY ASSURANCE</h1>
            <h2>CHRISTIAN BEZERRA</h2>
            <h3>Contato: </h3>
            <img src={profile} alt="contact" />
          </Card>
          <Card>
            <h1>QUALITY ASSURANCE</h1>
            <h2>GUSTAVO MOURA</h2>
            <h3>Contato: </h3>
            <img src={profile} alt="contact" />
          </Card>
          <Card>
            <h1>QUALITY ASSURANCE</h1>
            <h2>THIAGO HENRIQUE</h2>
            <h3>Contato: </h3>
            <img src={profile} alt="contact" />
          </Card>
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default AboutUs;
