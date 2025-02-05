import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
      name:"feed",
      initialState:null,
      reducers:{
            addFeed:(state,action)=>{
                  return action.payload
            },
            removeUserFromFeed:(state,action)=>{
                  // const nar=state.filter((e)=> e.id!== action.payload);
                  // console.log(nar)
                  // return nar;
                  return state.filter((e) => e._id !== action.payload);
            }
      }
})
export const {addFeed,removeUserFromFeed}=feedSlice.actions
export default feedSlice.reducer