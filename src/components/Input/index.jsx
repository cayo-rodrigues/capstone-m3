import { Container, Content } from "./styles";

import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

const Input = ({ label, type = "text", error, name, register, ...rest }) => {
    const [typePassword, setTypePassword] = useState("password");

    const handleTypePassword = () => {
        if (typePassword === "text") {
            setTypePassword("password");
        } else {
            setTypePassword("text");
        }
    };

    return (
        <Container>
            <p>
                {label} {!!error && <span> - {error}</span>}
            </p>
            <Content>
                <input
                    type={type === "password" ? typePassword : type}
                    {...register(name)}
                    {...rest}
                />
                {type === "password" && (
                    <button onClick={() => handleTypePassword()}>
                        {typePassword === "password" ? <HiEye /> : <HiEyeOff />}
                    </button>
                )}
            </Content>
        </Container>
    );
};

export default Input;
