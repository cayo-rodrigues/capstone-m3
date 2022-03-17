import Form from "../../components/Form";
import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <div className="col-left col">
          <div></div>
        </div>

        <div className="col-right col">
          <Form isLogin handleSubmitCallBack={(data) => console.log(data)} />
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
