import ChatCard from "../ChatCard";
import { Container } from "./styles";
import Loading from "../../components/Loading";

import { useUser } from "../../providers/user";
import { chatApi } from "../../services/api";
import { useAuthenticated } from "../../providers/authenticated";

import { useWorkers } from "../../providers/workers";
import { useHistory } from "react-router-dom";
import ChatMessages from "../ChatMessages";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Chats = ({
  chats,
  refreshMessages,
  setCurrentChat,
  setMessageIsOpen,
  messages,
  inputMessage,
  setInputMessage,
  sendMessager,
  refreshChats
}) => {

  useEffect(()=>refreshMessages(),[])

  const history = useHistory();
  const { workers } = useWorkers();
  const { authenticated } = useAuthenticated();

  const { user: userInfo } = useUser();

  const [currentChatUser,setCurrentChatUser] =useState('')

  const workerProfile = JSON.parse(localStorage.getItem("@ProWorking:user"));
  const { user } = workerProfile;

  console.log(workers)

  const initChat = (name,email) => {
 

    const header = {
      "Project-ID": "e17e9017-bc37-4905-87cd-3c21a240adb9",
      "User-Name": `${userInfo.user.email}`,
      "User-Secret": "proworking2022",
      "Content-Type": "application/json",
    };
    const data = {
      usernames: [userInfo.user.email, email],
      title: `${name}`,
      is_direct_chat: false,
    };
    if (authenticated) {
      chatApi
        .put("/chats", data, { headers: header })
        .then(() => console.log("oi"))
        .catch((err) => console.log(err));
    } else {
      toast.info("Faça login para usar o chat!", {
        toastId: "toastfyInfo",
      });
    }
  };

  return (
    <Container>
      <div className="col-left">
        <h1>ProWorking Chat</h1>
        <h2 className="usuario">Seja bem vindo {workerProfile.user.name}</h2>
        <h2>Chats abertos recentemente:</h2>
        <ul className="recent-open">
          {chats.length ? (
            chats.map((chat) => (
              <ChatCard
                setCurrentChatUser={setCurrentChatUser}
                key={chat.id}
                refreshMessages={refreshMessages}
                chat={chat}
                setCurrentChat={setCurrentChat}
                setMessageIsOpen={setMessageIsOpen}
              />
            ))
          ) : (
            <Loading />
          )}
        </ul>





        <h2>Todos os trabalhadores</h2>
        <ul className="all-chats">
          {workers
            .filter((worker) => worker.is_active)
            .map((worker, index) => (
              <li
                key={index}
                className="list-of-workers"
                onClick={() => {
                  initChat(worker.user.name,worker.user.email);
                  refreshChats()
                }}
              >
                {worker.user.name}
              </li>
            ))}
        </ul>
      </div>




      <div className="col-right">
        {window.innerWidth > 1000 && (
          <ChatMessages
            messages={messages}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            sendMessager={sendMessager}
            setMessageIsOpen={setMessageIsOpen}
            
          />
        )}
        {currentChatUser && <span className="current-Chat">{currentChatUser}</span>}
      </div>
    </Container>
  );
};

export default Chats;
