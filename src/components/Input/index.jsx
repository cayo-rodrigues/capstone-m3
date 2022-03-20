import { Container, Content, ContainerInputSearch } from "./styles";

import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

const Input = ({
  label,
  type = "text",
  error,
  name,
  register,
  isSearch = false,
  icon: Icon,
  ...rest
}) => {
  const [typePassword, setTypePassword] = useState("password");

  const handleTypePassword = () => {
    if (typePassword === "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  };

  return (
    <>
      {isSearch ? (
        <ContainerInputSearch placeholder="PESQUISAR UM SERVIÇO" />
      ) : (
        <Container>
          <p>
            {label} {!!error && <span> - {error}</span>}
          </p>
          <Content>
            {!!Icon && <Icon />}
            <input
              type={type === "password" ? typePassword : type}
              {...register(name)}
              {...rest}
            />
            {type === "password" && (
              <button type="button" onClick={() => handleTypePassword()}>
                {typePassword === "password" ? <HiEye /> : <HiEyeOff />}
              </button>
            )}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Input;
