
import Form from "../../components/Form";
import { LoginContainer } from "./styles";

const Login = () => {
  return (
      <>
      
      <LoginContainer>
          <div className="col-left">
            <div></div>
          </div>

          <div className="col-right">
            <Form isLogin />

          </div>

      </LoginContainer>
      </>

  );
};

export default Login;
