import {createSlice} from "@reduxjs/toolkit"

export const userSlice=createSlice({
   name:"user",
    initialState:{
       user:null
    },
    reducers:{
       SET_USER:(state,action)=>{
           state.user=action.payload;// dispatch(SET_USER({name:"fredy perez"}))
       }
    }
});

export const {SET_USER} =userSlice.actions;
export const getUser=(state)=>state.user.user;
export default userSlice.reducer;