import { useEffect, useState } from "react";
import ChatMessages from "../../components/ChatMessages";
import Chats from "../../components/Chats";
import { useUser } from "../../providers/user";
import { chatApi } from "../../services/api";

import { Container } from "./styles";

const ChatPage = () => {
    const { user } = useUser();
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    const [messages, setMessages] = useState([]);

    const [inputMessage, setInputMessage] = useState("");
    const [messageIsOpen, setMessageIsOpen] = useState(false);

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
            {messageIsOpen ? (
                <ChatMessages
                    messages={messages}
                    inputMessage={inputMessage}
                    setInputMessage={setInputMessage}
                    sendMessager={sendMessager}
                    setMessageIsOpen={setMessageIsOpen}
                />
            ) : (
                <Chats
                    chats={chats}
                    refreshMessages={refreshMessages}
                    setCurrentChat={setCurrentChat}
                    setMessageIsOpen={setMessageIsOpen}
                />
            )}
        </Container>
    );
};

export default ChatPage;
