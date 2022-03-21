import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

import { Zoom } from "react-toastify";
import BottomNavigator from "./components/BottomNavigator";

const App = () => {
  return (
    <>
      <ToastContainer transition={Zoom} autoClose={2000} limit={1} />
      <GlobalStyle />
      <Loading/>
      <Header/>
      <Routes />
      <Footer />
      <BottomNavigator/>
    </>
  );
};

export default App;
