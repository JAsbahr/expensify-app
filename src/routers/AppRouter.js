import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "../components/DashboardPage";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import LoginPage from "../components/LoginPage"
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import PrivateRoute from "./PrivateRoute"

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}> 
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddPage} />
                <PrivateRoute path="/edit/:id" component={EditPage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <PrivateRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router> //BrowserRouter hätte auch funktioniert, aber history brauchen wir noch öfter und nicht nur innerhalb von BrowserRouter (ist automatisch dabei)
);

export default AppRouter;