import { useEffect, useState } from "react";
import { useUser } from "../../providers/user";
import { chatApi } from "../../services/api";
import Button from "../Button";
import CardMessage from "../CardMessage";
import ChatCard from "../ChatCard";

import { BoxChat, Container, BoxMessages, BoxInput } from "./styles";

const Chat = () => {
    const { user } = useUser();
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    const [messages, setMessages] = useState([]);

    const [inputMessage, setInputMessage] = useState("");

    const refreshChats = () => {
        const header = {
            "Project-ID": "e17e9017-bc37-4905-87cd-3c21a240adb9",
            "User-Name": `${user.email}`,
            "User-Secret": "proworking2022",
            "Content-Type": "application/json",
        };
        chatApi
            .get("/chats", { headers: header })
            .then(({ data }) => setChats([...data]));
    };

    const refreshMessages = (chatId) => {
        const header = {
            "Project-ID": "e17e9017-bc37-4905-87cd-3c21a240adb9",
            "User-Name": `${user.email}`,
            "User-Secret": "proworking2022",
            "Content-Type": "application/json",
        };
        chatApi
            .get(`/chats/${chatId}/messages`, { headers: header })
            .then(({ data }) => setMessages([...data]));
    };

    useEffect(() => {
        refreshChats();
    }, []);

    const sendMessager = () => {
        console.log("teste1");
        const header = {
            "Project-ID": "e17e9017-bc37-4905-87cd-3c21a240adb9",
            "User-Name": `${user.email}`,
            "User-Secret": "proworking2022",
            "Content-Type": "application/json",
        };
        const dataMessage = { text: `${inputMessage}` };
        chatApi
            .post(`/chats/${currentChat.id}/messages/`, dataMessage, {
                headers: header,
            })
            .then(() => refreshMessages(currentChat.id))
            .then(() => setInputMessage(""));
    };

    return (
        <Container>
            <ul>
                {chats.map((chat) => (
                    <ChatCard
                        key={chat.id}
                        refreshMessages={refreshMessages}
                        chat={chat}
                        setCurrentChat={setCurrentChat}
                    />
                ))}
            </ul>
            <BoxChat>
                <BoxMessages>
                    {messages.map((message) => (
                        <CardMessage key={message.id} message={message} />
                    ))}
                </BoxMessages>
                <BoxInput>
                    <input
                        placeholder='Digite sua mensagem aqui...'
                        value={inputMessage}
                        onChange={(event) =>
                            setInputMessage(event.target.value)
                        }
                    />
                    <Button onClick={() => sendMessager()}>Enviar</Button>
                </BoxInput>
            </BoxChat>
        </Container>
    );
};

export default Chat;
