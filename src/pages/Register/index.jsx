import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../components/Form";
import { proWorkingApi } from "../../services/api";

import { RegisterContainer } from "./styles";

const Register = () => {
    const history = useHistory();

    const handleSubmitCallBack = (data) => {
        delete data.confirm_password;
        proWorkingApi
            .post("/register", data)
            .then(() => {
                toast.success("Conta criada com sucesso!");
                history.push("/login");
            })
            .catch(() => {
                toast.error("OPS! Email ja cadastrado!");
            });
    };

    return (
        <>
            <RegisterContainer>
                <div className='col-left'>
                    <Form
                        isRegister
                        handleSubmitCallBack={handleSubmitCallBack}
                    />
                </div>

                <div className='col-right'>
                    <div></div>
                </div>
            </RegisterContainer>
        </>
    );
};

export default Register;
