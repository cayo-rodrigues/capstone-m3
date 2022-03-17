import Form from "../../components/Form";

import { RegisterContainer } from "./styles";

const Register = () => {
    const handleSubmitCallBack = (data) => {

      console.log("alo")
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
