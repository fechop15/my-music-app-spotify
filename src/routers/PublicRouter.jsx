import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

function PublicRouter({component:Component, ...rest}) {
    const {currentUser}=useAuth();
    const login=localStorage.getItem('stateLogin')
    console.log(login);

    return (
        <Route
            {...rest}
            component={(props)=>!login?<Component{...props}/>:<Redirect to="/"/>}
        />
    );
}

export default PublicRouter;