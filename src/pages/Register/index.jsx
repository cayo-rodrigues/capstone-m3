import Form from "../../components/Form";

import { RegisterContainer } from "./styles";

const Register = () => {
  return (
    <>
    
    <RegisterContainer>

        <div className="col-left">
          <Form isRegister />
        </div>


        <div className="col-right">

          <div></div>

        </div>

    </RegisterContainer>
    </>
  );
};

export default Register;
