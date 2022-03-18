import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";


import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Loading/>
      <Routes />
    </>
  );
};

export default App;
