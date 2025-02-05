// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/Constants";
import { addReceived, removeReceived } from "../utils/receivedSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import './style.css'

const Requests = () => {
  const received = useSelector((store) => store.received)
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(true);
  const [showToast,setShowToast]=useState(false);
  const [showToast2,setShowToast2]=useState(false);
  let j = 0;
  const reviewRequest = async (status, requestId) => {
    try {
      setShowButton(false);
      const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        { withCredentials: true }
      )
      fetchReceived()
      if(status==="accepted"){
        setShowToast(true);
      setTimeout(()=>{
        setShowToast(false);
      },4000)
      }
      else{
        setShowToast2(true);
      setTimeout(()=>{
        setShowToast2(false);
      },4000)
      }
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }
  const fetchReceived = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received",
        { withCredentials: true }
      )
      console.log(res.data);
      dispatch(addReceived(res.data))
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect((e) => {
    if (!received || received.length === 0) {
      fetchReceived();
    }

  }, [])
  if (!received || received.length === 0) {
    return (
      <div className="flex items-center justify-center"><h2 >No Requests</h2></div>
    )
  }
  return (
    <div>
      {showToast && <div className="toast toast-top toast-center top-14">
        <div className="alert alert-success">
          <span>✔️✔️Connection Accepted successfully.</span>
        </div>
      </div>}
      {showToast2 && <div className="toast toast-top toast-center top-14">
        <div className="alert alert-warning">
          <span>✔️Connection Rejected successfully.</span>
        </div>
      </div>}
      <div className="flex flex-col items-center justify-center">

        <h1 className="text-2xl text-white">Connection Requests</h1>
        {received.map((e) => {
          return (
            <div className="connection" id="conr" key={j++}>
              <div>
                <img src={e.fromUserId.photoUrl} alt="img" className="image" />
              </div>
              <div className="con-right">
                <h3>{e.fromUserId.firstName + " " + e.fromUserId.lastName}</h3>
                <p>{e.fromUserId.about}</p>
                {e.fromUserId.age && <p>{e.fromUserId.age}</p>}
              </div>
               <div className="arb">
                <button className="btn btn-secondary" onClick={() => { reviewRequest("accepted", e._id) }}>Accept</button>
                <button className="btn btn-primary" onClick={() => { reviewRequest("rejected", e._id) }}>Reject</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Requests