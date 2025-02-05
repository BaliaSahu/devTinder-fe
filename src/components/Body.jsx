// import React from 'react'

import { useNavigate, Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./footer"
import axios from "axios"
import { BASE_URL } from "../utils/Constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"

const Body = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const fetchUser=async()=>{
    try{
      const res=await axios.get(BASE_URL+"/profile/view",{
        withCredentials:true
      })
      // console.log(res.data)
      
      dispatch(addUser(res.data))
    }
    catch(err){
      navigate('/login')
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Body