import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ServicesPage from "../pages/ServicesPage";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import How from "../pages/How";
import ServiceProfilePage from "../pages/ServiceProfilePage";
import SearchResults from "../pages/SearchResult";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/how" component={How} />
      <Route exact path="/services" component={ServicesPage} />

      <Route
        exact
        path={`/services/:id/:name`}
        component={ServiceProfilePage}
      />
      <Route exact path={`/services/:search`} component={SearchResults} />

      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
