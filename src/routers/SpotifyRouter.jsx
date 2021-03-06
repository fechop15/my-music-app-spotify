import React from 'react';
import {Redirect, Route} from "react-router-dom";
export const SpotifyRouterPublic=({component: Component, ...rest})=> {
    const token_spotify=localStorage.getItem('TOKEN_SPOTIFY')
    console.log("SpotifyRouterPublic "+(!token_spotify?true:false));
    return (
        <Route
            {...rest}
            component={(props)=>!token_spotify?<Component{...props}/>:<Redirect to="/index"/>}/>
    );
}
export const SpotifyRouterPrivate=({component: Component, ...rest})=> {
    const token_spotify=localStorage.getItem('TOKEN_SPOTIFY')
    console.log("SpotifyRouterPrivate "+(token_spotify?true:false));
    return (
        <Route
            {...rest}
            component={(props)=>token_spotify?<Component{...props}/>:<Redirect to="/"/>}/>
    );
}