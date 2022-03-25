import { ContainerChat } from "./styles";

const ChatCard = ({
  chat,
  refreshMessages,
  setCurrentChat,
  setMessageIsOpen,
  setCurrentChatUser
}) => {
  const newDate = new Date(chat.last_message.created);
  const fortedDate = newDate.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  return (
    <ContainerChat
      onClick={() => {
        setCurrentChat(chat);
        refreshMessages(chat.id);
        setMessageIsOpen(true);
        setCurrentChatUser(chat.title)
      }}
    >
      <div>
        <h3>{chat.title}</h3>
        <p>{chat.last_message.text}</p>
      </div>
      
      <span>{fortedDate}</span>
    </ContainerChat>
  );
};

export default ChatCard;
