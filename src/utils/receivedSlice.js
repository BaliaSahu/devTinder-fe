import { createSlice } from "@reduxjs/toolkit";

const receivedSlice=createSlice({
      name:"received",
      initialState:null,
      reducers:{
            addReceived:(state,action)=>{
                  return action.payload
            },
            removeReceived:(state,action)=>{
                  return null;
                  // const nary=state.filter((e)=> e.id!==action.payload)
                  // return nary;
            }
      }
})
 export const {addReceived,removeReceived}=receivedSlice.actions;
 export default receivedSlice.reducer