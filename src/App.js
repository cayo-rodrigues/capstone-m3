import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
