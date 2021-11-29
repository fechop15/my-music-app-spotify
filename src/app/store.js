import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../reducers/UserReducer"
import tokenReducer from "../reducers/TokenReducer"
import playListReducer from "../reducers/PlayListReducer"
import favoriteListReducer from "../reducers/FavoriteListReducer";
export default configureStore({
    reducer:{
        user:userReducer,
        token:tokenReducer,
        playList:playListReducer,
        favoriteList:favoriteListReducer
    }
})