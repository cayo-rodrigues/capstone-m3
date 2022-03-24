import Button from "../Button";
import CardMessage from "../CardMessage";
import { BoxChat, BoxInput, BoxMessages } from "./styles";

const ChatMessages = ({
    messages,
    inputMessage,
    setInputMessage,
    sendMessager,
    setMessageIsOpen,
}) => {
    return (
        <BoxChat>
            <button onClick={() => setMessageIsOpen(false)}>{"<"}</button>
            <BoxMessages>
                {messages.map((message) => (
                    <CardMessage key={message.id} message={message} />
                ))}
            </BoxMessages>
            <BoxInput>
                <textarea
                    placeholder='Digite sua mensagem aqui...'
                    value={inputMessage}
                    onChange={(event) => setInputMessage(event.target.value)}
                />
                <Button onClick={() => sendMessager()}>Enviar</Button>
            </BoxInput>
        </BoxChat>
    );
};

export default ChatMessages;
