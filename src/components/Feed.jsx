// import React from 'react'

import axios from "axios"
import { BASE_URL } from "../utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import UserCard from "./UserCard"

const Feed=()=>{
  const dispatch=useDispatch()
  const feeds=useSelector((store)=> store.feed)
  //  console.log(feeds)
  const getFeed=async()=>{
    try{
     
      const res=await axios.get(BASE_URL+"/user/feeds",{
        withCredentials:true
      })
      console.log(res.data)
      
      dispatch(addFeed(res.data))
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    // console.log(feeds)
    if(!feeds){
      getFeed()
    }
  },[])
  if(!feeds ||feeds.length ==0){
    return(
      <div className="flex justify-center">
        <h2>No New User Found</h2>
      </div>
    )
  }
  return (
    <div className="flex" style={
      {
        display:"flex",
        justifyContent:"center",
        gap:"20px"
      }
    }>
      {/* {feeds[9].photoUrl} */}
      {feeds && <UserCard user={feeds[0]}></UserCard>}
    </div>
  )
}

export default Feed