import BottomNavigator from "../../components/BottomNavigator";
import Form from "../../components/Form";

import { RegisterContainer } from "./styles";

const Register = () => {
  return (
    <>
      <RegisterContainer>
        <div className="col-left">
          <Form isRegister handleSubmitCallBack={(data) => console.log(data)} />
        </div>

        <div className="col-right">
          <div></div>
        </div>
      </RegisterContainer>
      <BottomNavigator/>
    </>
  );
};

export default Register;
