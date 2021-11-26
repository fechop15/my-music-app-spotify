import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

function PrivateRouter({component: Component, ...rest}) {
    const {currentUser} = useAuth();
    const login=localStorage.getItem('stateLogin')
    return (
        <Route
            {...rest}
            component={(props)=>login?<Component{...props}/>:<Redirect to="/login"/>}/>
    );
}

export default PrivateRouter;