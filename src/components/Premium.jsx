// import React from 'react'
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
const Premium = () => {
      const handleBuy=async(MembershipPlan)=>{
            try{
                  // kc 
                  const res=await axios.post(BASE_URL+"/payment/createOrder",{
                        type:MembershipPlan
                  },{withCredentials:true})
                  console.log(res);
                  const{currency,amount,keyId,notes,orderId}=res.data
                  console.log(currency,amount,keyId,notes,orderId)

                  const options = {
                        key: keyId,
                        amount: amount,
                        currency: currency,
                        name: 'DevTinder',
                        description: 'Connect to other Developer',
                        order_id: orderId, 
                        prefill: {
                          name: notes.firstName+" "+notes.lastName,
                        },
                        theme: {
                          color: '#F37254'
                        },
                  };
                  const rzp = new window.Razorpay(options);
                  rzp.open();
            }catch(err){
                  console.log(err);
            }
      }
     
      return (
            <div className="p-5">
                  <div className="flex w-full flex-col border-opacity-50">
                        <div className="card bg-base-300 rounded-box grid h-full place-items-center gap-5 p-5">
                              <h1 className="bold ">Silver Membership</h1>
                              <ul>
                                    <li>- Chat With Other People</li>
                                    <li>- 100 connection Requests per day</li>
                                    <li>- Blue tick</li>
                                    <li>- 3 Months</li>
                              </ul>
                              <button onClick={()=>{ handleBuy("Silver")}} className="btn btn-primary">Buy Silver Membership</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="card bg-base-300 rounded-box grid h-full place-items-center gap-5 p-5">
                              <h1 className="bold">Gold Membership</h1>
                              <ul>
                                    <li>- Chat With Other People</li>
                                    <li>- Infinite connection Requests per day</li>
                                    <li>- Blue tick</li>
                                    <li>- 6 Months</li>
                              </ul>
                              <button onClick={()=>{handleBuy("Gold")}} className="btn btn-secondary">Buy Gold Membership</button>
                        </div>
                  </div>
            </div>
      )
}

export default Premium