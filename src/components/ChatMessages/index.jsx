
import CardMessage from "../CardMessage";
import { BoxChat } from "./styles";

import {IoSendSharp} from 'react-icons/io5'
import { useHistory } from "react-router-dom";

const ChatMessages = ({
    messages,
    inputMessage,
    setInputMessage,
    sendMessager,
    setMessageIsOpen,
}) => {
    const history = useHistory()
    return (
        <BoxChat>
            <button className="voltarChat" onClick={() =>{
                setMessageIsOpen(false)
                history.push('/')
            }}>{"Voltar"}</button>

            <div className="box-messages">
                {messages.map((message) => (
                    <CardMessage key={message.id} message={message} />
                ))}
            </div>
            <div className="boxInput">
                <input
                    placeholder='Digite sua mensagem aqui...'
                    value={inputMessage}
                    onChange={(event) => setInputMessage(event.target.value)}
                />
                <button onClick={() => sendMessager()}><IoSendSharp/></button>
            </div>
        </BoxChat>
    );
};

export default ChatMessages;
