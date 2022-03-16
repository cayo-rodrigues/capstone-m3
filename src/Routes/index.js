import { Switch,Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


export default function Router(){

    return (
        <Switch>
            <Route exact path={'/'}> <LandingPage/> </Route>
            <Route exact path={'/home'}> <Home/> </Route>
            <Route exact path={'/dashboard'}> <Dashboard/> </Route>
            <Route exact path={'/login'}> <Login/> </Route>
            <Route exact path={'/register'}> <Register/> </Route>
        </Switch>
    )

}