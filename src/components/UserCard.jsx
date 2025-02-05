// import React from 'react'

import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

function UserCard({user}) {
      const{firstName,lastName,about,age,gender,skills}=user
      const dispatch=useDispatch()
      console.log(age)
      const handleRequest=async (status,id)=>{
            try{
                  const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+id,{},
                        {withCredentials:true}
                  )
                  console.log(res)
                  dispatch(removeUserFromFeed(id))
            }catch(err){
                  console.log(err);
            }
      }
      
      return (
            <div className="flex justify-center items-center p--10">
                  <div className="card bg-base-300 h-85 w-97 shadow-xl">
                        <figure className="">
                              <img className="w-full max-h-[50vh] object-contain my-2"
                                    src={user.photoUrl}
                                    alt="Image" />
                        </figure>
                        <div className="card-body">
                              <h2 className="card-title">{firstName +" "+lastName}</h2>
                              {age &&  (<h3>{age+" "+gender}</h3>)}
                              <p>{about}</p>
                              <div className="card-actions justify-center">
                                    <button className="btn btn-primary" onClick={()=>handleRequest("ignored",user._id)}>Not Interested</button>
                                    <button className="btn btn-secondary" onClick={()=>handleRequest("interested",user._id)}>Interested❤️</button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default UserCard