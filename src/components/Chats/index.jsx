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

const Chats = ({
  chats,
  refreshMessages,
  setCurrentChat,
  setMessageIsOpen,
  messages,
  inputMessage,
  setInputMessage,
  sendMessager,
}) => {
  const history = useHistory();
  const { workers } = useWorkers();
  const { authenticated } = useAuthenticated();
  
  const { user: userInfo } = useUser();
  
  const workerProfile = JSON.parse(localStorage.getItem('@ProWorking:user'))
  const { user } = workerProfile;

  console.log(userInfo.user.email)
  console.log(userInfo.user.name);
  
  console.log(user.email);
  console.log(user.name);
  


  const initChat = () => {
    const header = {
        "Project-ID": "e17e9017-bc37-4905-87cd-3c21a240adb9",
        "User-Name": `${userInfo.user.email}`,
        "User-Secret": "proworking2022",
        "Content-Type": "application/json",
    };
    const data = {
        usernames: [userInfo.user.email, user.email],
        title: `${userInfo.user.name}/${user.name}`,
        is_direct_chat: false,
    };
    if (authenticated) {
        chatApi
            .put("/chats/", data, { headers: header })
            //.then(() => history.push("/chat"));
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

        <h2>Chats abertos recentemente:</h2>
        <ul className="recent-open">
          {chats.length ? (
            chats.map((chat) => (
              <ChatCard
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
            .map((worker,index) => (
              <li key={index} className="list-of-workers" onClick={()=>{initChat()}}>{worker.user.name}</li>
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
      </div>


    </Container>
  );
};

export default Chats;
