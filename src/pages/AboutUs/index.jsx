import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Box, Card, Container } from "./styles";
import us from "../../assets/images/us.svg";
import profile from "../../assets/images/profile.png";

const AboutUs = () => {
  return (
    <>
      <Container>
        <h1>SOBRE NÓS</h1>
        <img src={us} alt="time" className="time" />
        <Box>
          <Card>
            <h1>SCRUM MASTER</h1>
            <div>
              <h2>GABRIEL ROCHA</h2>
              <img src={profile} alt="contact" />
            </div>
            <h3>Contato: </h3>
          </Card>
          <Card>
            <h1>TECH LEADER</h1>
            <div>
              <h2>CAYO RODRIGUES</h2>
              <img src={profile} alt="contact" />
            </div>
            <h3>Contato: </h3>
          </Card>
          <Card>
            <h1>PRODUCT OWNER</h1>
            <div>
              <h2>IGOR SOUSA</h2>
              <img src={profile} alt="contact" />
            </div>
            <h3>Contato: </h3>
          </Card>
          <Card>
            <h1>QUALITY ASSURANCE</h1>
            <div>
              <h2>CHRISTIAN BEZERRA</h2>
              <img src={profile} alt="contact" />
            </div>
            <h3>Contato: </h3>
          </Card>
          <Card>
            <h1>QUALITY ASSURANCE</h1>
            <div>
              <h2>GUSTAVO MOURA</h2>
              <img src={profile} alt="contact" />
            </div>
            <h3>Contato: </h3>
          </Card>
          <Card>
            <h1>QUALITY ASSURANCE</h1>
            <div>
              <h2>THIAGO MONSERRAT</h2>
              <img src={profile} alt="contact" />
            </div>
            <h3>Contato: </h3>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
