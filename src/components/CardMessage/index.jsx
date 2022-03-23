import { Container, Content } from "./styles";

const CardMessage = ({ message }) => {
    const newDate = new Date(message.created);
    const fortedDate = newDate.toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
    });

    return (
        <Container>
            <span>{fortedDate}</span>
            <Content>
                <span>{message.sender.first_name}</span>
                <p>{message.text}</p>
            </Content>
        </Container>
    );
};

export default CardMessage;
