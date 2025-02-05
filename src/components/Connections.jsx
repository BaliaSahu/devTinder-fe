// import React from 'react'

import axios from "axios"
import { BASE_URL } from "../utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionsSlice";
import { useEffect } from "react";
import './style.css'

const Connections = () => {
      const dispatch = useDispatch();
      let j = 0;
      const connections = useSelector((store) => store.connections)
      const fetchConnections = async () => {
            try {
                  const res = await axios.get(BASE_URL + "/user/connections",
                        { withCredentials: true }
                  )
                  console.log("asla")
                  console.log(res.data.data, "jjjed")

                  dispatch(addConnections(res.data.data))
                  console.log(connections.data.data)
            } catch (err) {
                  console.log(err);
            }
      }
      useEffect(() => {
            if (!connections || connections.length === 0) {
                  // console.log(connections) 
                  fetchConnections()
            }

            console.log(connections)
      }, [])
      if (!connections || connections.length === 0) {
            return <h1>No connection found !</h1>
      }
      return (
            <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl text-white">Connections</h1>
                  {connections.map((e) => {
                        return (
                              <div className="connection" key={j++}>
                                    <div>
                                          <img src={e.photoUrl} alt="img" className="image" />
                                    </div>
                                    <div className="con-right">
                                          <h3>{e.firstName + " " + e.lastName}</h3>
                                          <p>{e.about}</p>
                                          {e.age && <p>{e.age}</p>}
                                    </div>
                                    
                              </div>
                        )
                  })}
            </div>
      )
}

export default Connections