// import React from 'react'

import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/Constants"
import { removeUser } from "../utils/userSlice"
import Connections from "./Connections"
const Navbar = () => {
  const user=useSelector((store)=> store.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const logout=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/logout",
        {},
        {
        withCredentials:true
      })
      console.log(res)
      dispatch(removeUser())
      navigate("/login")
    }catch(err){
      console.log(err)
    }
  }
  return (
      <div className="navbar bg-base-200 sticky top-0 z-10 ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">🤩DevTinder</Link>
      </div>
      {user && (<div className="flex-none gap-2">
        <div>welcome, {user.firstName}</div>
        <div className="dropdown dropdown-end mx-5 flex " >
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Image"
                src={user.photoUrl} />
            </div>
          </div> 
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to={"/connections"}>Connections</Link></li>
            <li><Link to={"/requests"}>Requests</Link></li>
            <li><Link onClick={logout}>Logout</Link></li>
          </ul>
        </div>
      </div>)}
    </div>
  )
}

export default Navbar