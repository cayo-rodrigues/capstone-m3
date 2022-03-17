import { ToastContainer } from "react-toastify";
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
        </>
    );
};

export default App;
