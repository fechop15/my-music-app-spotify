import {createSlice} from "@reduxjs/toolkit"

export const playListSlice=createSlice({
   name:"playList",
    initialState:{
        playList:null
    },
    reducers:{
       SET_PLAYLIST:(state,action)=>{
           state.playList=action.payload;// dispatch(SET_USER({name:"fredy perez"}))
       }
    }
});

export const {SET_PLAYLIST} =playListSlice.actions;
export const getPlayList=(state)=>state.playList.playList;
export default playListSlice.reducer;