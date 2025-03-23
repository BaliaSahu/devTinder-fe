import React from 'react'
import {BASE_URL} from "../utils/Constants"
import axios from "axios"

function Pm() {
      const handleBuyClick=async(type)=>{
            console.log(type)
            console.log(document.cookie,"hihhi");
            const order=await axios.post(BASE_URL+"/payment/createorders",
                  {type:type},
                  {withCredentials:true}
            )
            console.log(order.data);
            const options={
                  key:order.data.key_id,
                  amount:order.data.amount,
                  currency:order.data.currency,
                  name:"DevTinder",
                  orderid:order.data.orderId,
                  description:"Connect to Other developers."
            }
            const rzp=new window.Razorpay(options);
            rzp.open()
      }
      return (
            <div>
                  <div className="flex w-full flex-col">
                        <div className="card bg-base-300 rounded-box grid  place-items-center p-8">
                              <h2 className="p-5 font-bold text-xl">Silver Membership</h2>
                              <ul>
                                    <li>- Chat With Other People</li>
                                    <li>- 100 connection Requests per day</li>
                                    <li>- Blue tick</li>
                                    <li>- 3 Months</li>
                              </ul>
                              <button className="btn btn-primary mt-5" onClick={()=> handleBuyClick("Silver")}>
                                    Buy Silver Membership
                              </button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="card bg-base-300 rounded-box grid place-items-center p-8">
                              <h2 className="p-5 font-bold text-xl">Gold Membership</h2>
                              <ul>
                                    <li>- Chat With Other People</li>
                                    <li>- Infinite connection Requests per day</li>
                                    <li>- Blue tick</li>
                                    <li>- 6 Months</li>
                              </ul>
                              <button className="btn btn-secondary mt-5" onClick={()=> handleBuyClick("Gold")}>Buy Gold Membership</button>
                        </div>
                  </div>
            </div>
      )
}

export default Pm
