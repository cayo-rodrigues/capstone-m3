import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import How from "../pages/How";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/how" component={How} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
