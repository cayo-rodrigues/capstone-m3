import ChatCard from "../ChatCard";

const Chats = ({ chats, refreshMessages, setCurrentChat,setMessageIsOpen }) => {
    return (
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
    );
};

export default Chats;
