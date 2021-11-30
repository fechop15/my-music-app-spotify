import React from 'react';
import {Redirect, Route} from "react-router-dom";

function PublicRouter({component:Component, ...rest}) {
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