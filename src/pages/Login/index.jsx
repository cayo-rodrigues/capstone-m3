
import Form from "../../components/Form";

import { proWorkingApi } from "../../services/api";
import { useUser } from "../../providers/user";
import { useAuthenticated } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginContainer } from "./styles";


const Login = () => {
    const { handleUser } = useUser();
    const { authenticated, setAuthenticated } = useAuthenticated();

    const history = useHistory();

    const handleSubmitCallBack = (dataUser) => {

        proWorkingApi
            .post("/login", dataUser)
            .then(({ data }) => {
                handleUser(data);
                setAuthenticated(true);
                history.push("/dashboard");
            })
            .catch(() => toast.error("Email ou senha errados!"));
    };

    if (authenticated) {
        return <Redirect to={"/dashboard"} />;
    }

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
