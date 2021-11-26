import {createSlice} from "@reduxjs/toolkit"

export const tokenSlice=createSlice({
   name:"token",
    initialState:{
       token:null
    },
    reducers:{
       SET_TOKEN:(state,action)=>{
           state.token=action.payload;// dispatch(SET_USER({name:"fredy perez"}))
       }
    }
});

export const {SET_TOKEN} =tokenSlice.actions;
export const getToken=(state)=>state.token.token;
export default tokenSlice.reducer;