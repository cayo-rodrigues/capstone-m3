import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
