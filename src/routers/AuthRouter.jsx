import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import LoginPage from "../page/LoginPage";

import PublicRouter from "./PublicRouter";
import RegisterPage from "../page/RegisterPage";
import PrivateRouter from "./PrivateRouter";
import AppRouter from "./AppRouter";

function AuthRouter(props) {
    return (
        <Router>
            <Switch>
                <PublicRouter exact path="/login" component={LoginPage}/>
                <PublicRouter exact path="/register" component={RegisterPage}/>
                <PrivateRouter path="/" component={AppRouter}/>
            </Switch>
        </Router>
    );
}

export default AuthRouter;