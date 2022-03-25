import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../components/Form";
import { proWorkingApi } from "../../services/api";
import { useAuthenticated } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";

import { RegisterContainer } from "./styles";
import { useWorkers } from "../../providers/workers";

const Register = () => {
  const history = useHistory();
  const { authenticated } = useAuthenticated();
  const { refreshWorkers } = useWorkers();

  const handleSubmitCallBack = (data) => {
    delete data.confirm_password;
    proWorkingApi
      .post("/register", { ...data, is_active: true, is_admin: false })
      .then((res) => {
        proWorkingApi
          .post(
            "/workers",
            { userId: res.data.user.id, is_active: false },
            {
              headers: {
                Authorization: `Bearer ${res.data.accessToken}`,
              },
            }
          )
          .then(() => {
            refreshWorkers();
            toast.success("Conta criada com sucesso!", {
              toastId: "toastSuccess",
            });
            history.push("/login");
          });
      })
      .catch(() => {
        toast.error("OPS! Email já cadastrado!", {
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
        <div className="col-left">
          <Form isRegister handleSubmitCallBack={handleSubmitCallBack} />
        </div>

        <div className="col-right">
          <div></div>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;
