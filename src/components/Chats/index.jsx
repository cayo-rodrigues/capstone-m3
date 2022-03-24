import ChatCard from "../ChatCard";
import { Container } from "./styles";

const Chats = ({
  chats,
  refreshMessages,
  setCurrentChat,
  setMessageIsOpen,
}) => {
  return (
    <Container>
      <ul>
        {chats.map((chat) => (
          <ChatCard
            key={chat.id}
            refreshMessages={refreshMessages}
            chat={chat}
            setCurrentChat={setCurrentChat}
            setMessageIsOpen={setMessageIsOpen}
          />
        ))}
      </ul>
    </Container>
  );
};

export default Chats;
