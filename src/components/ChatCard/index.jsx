import { ContainerChat } from "./styles";

const ChatCard = ({
    chat,
    refreshMessages,
    setCurrentChat,
    setMessageIsOpen,
}) => {
    return (
        <ContainerChat
            onClick={() => {
                setCurrentChat(chat);
                refreshMessages(chat.id);
                setMessageIsOpen(true);
            }}>
            <h3>{chat.title}</h3>
            <p>{chat.last_message.text}</p>
        </ContainerChat>
    );
};

export default ChatCard;
