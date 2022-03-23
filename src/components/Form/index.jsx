import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input/index.jsx";
import { FormContainer, FormFooter } from "./style";

import { BsPerson } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ isLogin, isRegister, handleSubmitCallBack }) => {
    const schemaLogin = yup.object().shape({
        email: yup
            .string()
            .email("precisa ser um email válido")
            .required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório"),
    });
    const schemaRegister = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup
            .string()
            .email("precisa ser um email válido")
            .required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório"),
        confirm_password: yup
            .string()
            .oneOf([yup.ref("password"), null], "senhas devem ser iguais")
            .required("Campo Obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(isLogin ? schemaLogin : schemaRegister),
    });

    return (
        <form onSubmit={handleSubmit(handleSubmitCallBack)}>
            {isLogin && (
                <FormContainer>
                    <h1>Login</h1>
                    <Input
                        error={errors.email?.message}
                        register={register}
                        name='email'
                        icon={AiOutlineMail}
                        label='Email'
                        placeholder='Email'
                    />
                    <Input
                        error={errors.password?.message}
                        register={register}
                        name='password'
                        icon={FiLock}
                        label='Senha'
                        placeholder='Senha'
                        type={"password"}
                    />
                    <Button type='submit'>Logar</Button>
                </FormContainer>
            )}
            {isRegister && (
                <FormContainer>
                    <h1>Cadastro</h1>
                    <Input
                        error={errors.name?.message}
                        register={register}
                        name='name'
                        icon={BsPerson}
                        label='Nome'
                        placeholder='Nome'
                    />
                    <Input
                        error={errors.email?.message}
                        register={register}
                        name='email'
                        icon={AiOutlineMail}
                        label='Email'
                        placeholder='Email'
                    />
                    <Input
                        error={errors.password?.message}
                        register={register}
                        name='password'
                        icon={FiLock}
                        label='Senha'
                        placeholder='Senha'
                        type={"password"}
                    />
                    <Input
                        error={errors.confirm_password?.message}
                        register={register}
                        name='confirm_password'
                        icon={FiLock}
                        label='Confirmar Senha'
                        placeholder='Confirmar Senha'
                        type={"password"}
                    />

                    <Button type='submit'>Cadastrar</Button>
                </FormContainer>
            )}
            <FormFooter>
                {isLogin && (
                    <span>
                        Não possui Cadastro?{" "}
                        <Link to={"/register"}>Cadastre-se aqui</Link>{" "}
                    </span>
                )}
                {isRegister && (
                    <span>
                        Já possui Login? <Link to={"/login"}>Clique aqui</Link>{" "}
                    </span>
                )}
                <Link to={"/"}>Voltar a página principal</Link>
            </FormFooter>
        </form>
    );
};
export default Form;
