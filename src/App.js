import * as React from 'react';
import AuthRouter from "./routers/AuthRouter";
import {AuthProvider} from "./contexts/AuthContext";
import {getTokenFromURL} from "./api/spotify";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import {SET_USER} from "./reducers/UserReducer";
import {getToken, SET_TOKEN} from "./reducers/TokenReducer";
import {SET_PLAYLIST} from "./reducers/PlayListReducer";
import {SET_FAVORITELIST} from "./reducers/FavoriteListReducer";

// const init = () => {
//   return JSON.parse(localStorage.getItem('log'))||{log:false}
// }
const spotify=new SpotifyWebApi();
export default function Types() {
    const token=useSelector(getToken)
    const token_spotify=localStorage.getItem('TOKEN_SPOTIFY')
    const dispatch=useDispatch();

    function loadDataSpotify(__token) {
        console.log("token load "+__token)
        spotify.setAccessToken(__token);
        spotify.getMe().then(
            function (user) {
                dispatch(SET_USER(user));
            },
            function (err) {
                localStorage.removeItem('TOKEN_SPOTIFY')
            }
        );

        spotify.getMySavedTracks().then(favoriteList=>dispatch(SET_FAVORITELIST(favoriteList)));

        spotify.getPlaylist('37i9dQZF1DX0BcQWzuB7ZO').then(playList=>dispatch(SET_PLAYLIST(playList)))

        dispatch(SET_TOKEN(__token))
    }

    useEffect(() => {
        const hash=getTokenFromURL()
        const _token=hash.access_token;
        console.log("hass => "+_token);
        if (_token){
            localStorage.setItem('TOKEN_SPOTIFY',_token)
            loadDataSpotify(_token);
            console.log("url")
        }else if(token_spotify){
            loadDataSpotify(token_spotify);
            console.log("localStorage")
        }
    }, [dispatch,token,token_spotify]);
    
  return (
      // <AuthContext.Provider value={{log,dispatch}}>
      <AuthProvider>
        <AuthRouter/>
      </AuthProvider>
  );
}