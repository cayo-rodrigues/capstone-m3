import { FcGoogle } from "react-icons/fc";
import { Container } from "./styles";

const GoogleButton = ({ text }) => {
  return (
    <Container>
      <FcGoogle /> {text}
    </Container>
  );
};

export default GoogleButton;
