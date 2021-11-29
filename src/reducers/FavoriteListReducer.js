import {createSlice} from "@reduxjs/toolkit"

export const favoriteListSlice=createSlice({
   name:"favoriteList",
    initialState:{
        favoriteList:null
    },
    reducers:{
       SET_FAVORITELIST:(state,action)=>{
           state.favoriteList=action.payload;// dispatch(SET_USER({name:"fredy perez"}))
       }
    }
});

export const {SET_FAVORITELIST} =favoriteListSlice.actions;
export const getFavoriteList=(state)=>state.favoriteList.favoriteList;
export default favoriteListSlice.reducer;