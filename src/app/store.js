import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../reducers/UserReducer"
import tokenReducer from "../reducers/TokenReducer"
import playListReducer from "../reducers/PlayListReducer"
export default configureStore({
    reducer:{
        user:userReducer,
        token:tokenReducer,
        playList:playListReducer
    }
})