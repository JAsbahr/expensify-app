import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "../components/DashboardPage";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";
import LoginPage from "../components/LoginPage"
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import Header from "../components/Header";

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/create" component={AddPage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router> //BrowserRouter hätte auch funktioniert, aber history brauchen wir noch öfter und nicht nur innerhalb von BrowserRouter (ist automatisch dabei)
);

export default AppRouter;
