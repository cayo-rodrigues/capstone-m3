import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

import { Zoom } from "react-toastify";
import BottomNavigator from "./components/BottomNavigator";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const App = () => {
  return (
    <>
      <ToastContainer transition={Zoom} autoClose={2000} limit={1} />
      <GlobalStyle />
      <Loading />
      <Header />
      <Routes />
      <Footer />
      <BottomNavigator />
    </>
  );
};

export default App;
