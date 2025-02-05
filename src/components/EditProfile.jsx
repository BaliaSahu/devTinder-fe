// import React from 'react'

import { useState } from "react"
import { useDispatch } from "react-redux"
import UserCard from './UserCard'
import axios from "axios"
import { BASE_URL } from "../utils/Constants"
import { addUser } from "../utils/userSlice"
const EditProfile = ({ user }) => {
      const [firstName, setFirstName] = useState(user.firstName);
      const [lastName, setLastName] = useState(user.lastName);
      const [age, setAge] = useState(user.age);
      const gender = user.gender
      const [about, setAbout] = useState(user.about);
      const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
      const dispatch = useDispatch()
      const [error, setError] = useState("");
      const[toast,setToast]=useState(false)
      console.log(user.gender)
      const saveProfile = async () => {
            try {
                  const res = await axios.patch(BASE_URL + "/profile/edit", {
                        "firstName": firstName,
                        "lastName": lastName,
                        "age": age,
                        "about": about,
                        "photoUrl": photoUrl
                  }, { withCredentials: true })
                  console.log(res.data)
                  dispatch(addUser(res.data))
                  setToast(true)
                  setTimeout(()=>{
                        setToast(false);
                  },3000)
            } catch (err) {
                  console.log("errrrrrrrrrrrrrr")
                  setError(err)
                  console.log(err)
            }
      }
      return (
            <>
                  {toast && <div className="toast toast-top toast-center z-10">
                        <div className="alert alert-success">
                              <span>✅✔️Profile saved successfully.</span>
                        </div>
                  </div>}
                  <div className="flex justify-center gap-10 flex-wrap">
                        <div className="flex justify-center ">
                              <div className="card bg-base-300 w-96 shadow-xl mt-4 mb-40">
                                    <div className="card-body">
                                          <h2 className="card-title flex justify-center">Edit Profile</h2>
                                          <div>
                                                <label className="form-control w-full max-w-xs my-2">
                                                      <div className="label">
                                                            <span className="label-text">FirstName :{firstName}</span>
                                                      </div>
                                                      <input type="text"
                                                            contentEditable="true"
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                                </label>
                                                <label className="form-control w-full max-w-xs my-4">
                                                      <div className="label">
                                                            <span className="label-text">LastName:{lastName}</span>
                                                      </div>
                                                      <input type="text"
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            placeholder="Type here"
                                                            className="input input-bordered w-full max-w-xs" />
                                                </label>
                                                <label className="form-control w-full max-w-xs my-4">
                                                      <div className="label">
                                                            <span className="label-text">Age(Numbers Only):{age}</span>
                                                      </div>
                                                      <input type="text"
                                                            onChange={(e) => setAge(parseInt(e.target.value))}
                                                            placeholder="Type here"
                                                            className="input input-bordered w-full max-w-xs" />
                                                </label>
                                                <label className="form-control w-full max-w-xs my-4">
                                                      <div className="label">
                                                            <span className="label-text">About:{about}</span>
                                                      </div>
                                                      <textarea type="text"
                                                            rows={60}
                                                            onChange={(e) => setAbout(e.target.value)}
                                                            placeholder="Type here"
                                                            className="input input-bordered w-full max-w-xs" ></textarea>
                                                </label>
                                                <label className="form-control w-full max-w-xs my-4">
                                                      <div className="label">
                                                            <span className="label-text">PhotoUrl:</span>
                                                      </div>
                                                      <input type="text"
                                                            onChange={(e) => setPhotoUrl(e.target.value)}
                                                            placeholder="Type here"
                                                            className="input input-bordered w-full max-w-xs" />
                                                </label>
                                          </div>
                                          <div>
                                                <p>{error}</p>
                                          </div>
                                          <div className="card-actions justify-center flex-col items-center">
                                                <p className='text-red-600'></p>
                                                <button className="btn btn-primary"
                                                      onClick={saveProfile}
                                                >Save Profile</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div>
                              {user && <UserCard user={{ firstName, lastName, about, age, gender, photoUrl }}></UserCard>}
                        </div>
                  </div>

            </>
      )
}

export default EditProfile