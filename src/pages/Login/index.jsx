import Form from "../../components/Form";
import { proWorkingApi } from "../../services/api";
import { useUser } from "../../providers/user";

import { LoginContainer } from "./styles";

const Login = () => {
    const { handleUser } = useUser();

    const handleSubmitCallBack = (dataUser) => {
        proWorkingApi.post("/login", dataUser).then(({ data }) => {
            handleUser(data);
        });
    };

    return (
        <>
            <LoginContainer>
                <div className='col-left col'>
                    <div></div>
                </div>

                <div className='col-right col'>
                    <Form isLogin handleSubmitCallBack={handleSubmitCallBack} />
                </div>
            </LoginContainer>
        </>
    );
};

export default Login;
