import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../components/Form";
import { proWorkingApi } from "../../services/api";
import { useAuthenticated } from "../../providers/authenticated";
import { Redirect } from "react-router-dom";

import { RegisterContainer } from "./styles";
import { useWorkers } from "../../providers/workers";

import { firebase, auth } from "../../services/firebase";
import { useAuthGoogle } from "../../providers/authGoogle";
import { useUser } from "../../providers/user";

const Register = () => {
  const history = useHistory();
  const { authenticated, setAuthenticated } = useAuthenticated();
  const { refreshWorkers } = useWorkers();
  const { user, setUser } = useAuthGoogle();
  const { handleUser } = useUser();

  const handleSubmitCallBack = (data) => {
    delete data.confirm_password;
    console.log(data);

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

            if (!!user) {
              loginGoogle(data);
            } else {
              history.push("/login");
            }

          });
      })
      .catch(() => {
        toast.error("OPS! Email já cadastrado!", {
          toastId: "toastError",
        });
      });
  };




  const loginGoogle = (dataUser) => {
    proWorkingApi
      .post("/login", dataUser)
      .then(({ data }) => {
        console.log(data);
        handleUser(data);
        setAuthenticated(true);
        history.push("/dashboard");
        toast.success("Login feito com sucesso");
      })
      .catch(() =>
        toast.error("Email ou senha incorretos!", {
          toastId: "toastError",
        })
      );
  };

  const handleClickButtonRegister = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, email } = result.user;

      if (!displayName) throw new Error("O Usuario não tem Nome");

      setUser({
        name: displayName,
        email: email,
        password: "pw2022",
      });

      handleSubmitCallBack(user);
    }
  };

  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <>
      <RegisterContainer>
        <div className="col-left">
          <Form
            isRegister
            handleSubmitCallBack={handleSubmitCallBack}
            handleClickButtonRegister={handleClickButtonRegister}
          />
        </div>

        <div className="col-right">
          <div></div>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;
