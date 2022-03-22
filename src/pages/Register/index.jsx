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

    const handleSubmitCallBack = (data) => {
        delete data.confirm_password;
        proWorkingApi
            .post("/register", data)
            .then(() => {
                toast.success("Conta criada com sucesso!", {
                    toastId: "toastSuccess",
                });
                history.push("/login");
            })
            .catch(() => {
                toast.error("OPS! Email ja cadastrado!", {
                    toastId: "toastError",
                });
            });

        chatApi
            .post("/users", {
                headers: {
                    "private-key": "904cdef3-09bc-4891-80b2-6b3de0b6b1f8",
                },
                data: { username: "2@1.com", secret: "1" },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
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
