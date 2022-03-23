import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../components/Form";
import { proWorkingApi, chatApi } from "../../services/api";
import { useAuthenticated } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";

import { RegisterContainer } from "./styles";

const Register = () => {
    const history = useHistory();
    const { authenticated } = useAuthenticated();

    const createChatUser = (username) => {
        const privateKey = "904cdef3-09bc-4891-80b2-6b3de0b6b1f8";
        const dataChat = { username: username, secret: "proworking2022" };

        chatApi.post("/users", dataChat, {
            headers: {
                "PRIVATE-KEY": privateKey,
            },
        });
    };

    const handleSubmitCallBack = (data) => {
        delete data.confirm_password;

        proWorkingApi
            .post("/register", data)
            .then(() => {
                toast.success("Conta criada com sucesso!", {
                    toastId: "toastSuccess",
                });
                createChatUser(data.email);
                history.push("/login");
            })
            .catch(() => {
                toast.error("OPS! Email ja cadastrado!", {
                    toastId: "toastError",
                });
            });
    };

    if (authenticated) {
        return <Redirect to={"/dashboard"} />;
    }

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
