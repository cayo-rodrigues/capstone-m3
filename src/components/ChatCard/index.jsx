import { ContainerChat } from "./styles";

const ChatCard = ({ chat, refreshMessages, setCurrentChat }) => {
    return (
        <ContainerChat
            onClick={() => {
                setCurrentChat(chat);
                refreshMessages(chat.id);
            }}>
            <h3>{chat.title}</h3>
            <p>{chat.last_message.text}</p>
        </ContainerChat>
    );
};

export default ChatCard;
