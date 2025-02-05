// import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/Constants'

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [skills, setskills] = useState([]);
  const [gender, setGender] = useState("");
  const [loginForm, setLoginForm] = useState(true);
  const [ showToast, setShowToast ] = useState(false);
  const dispatch = useDispatch()
  const [email, setEmail] = useState("Simran@gmail.com")
  const [Password, setPassword] = useState("Gouri@777")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        email: email,
        password: Password,
      }, { withCredentials: true });
      // console.log(res.data.data)
      dispatch(addUser(res.data.data))
      setShowToast(true);
      setTimeout(()=>{
        setShowToast(false);
        return navigate("/profile");
      },2000)
      
    } catch (err) {
      setError(() => "Error: " + err)
      console.log(err)
    }

  }
  const handleLogin = async () => {
    try {
      console.log(BASE_URL + "/login")
      const res = await axios.post(
        BASE_URL + "/login", {
        "email": email,
        "password": Password,
      },
        {
          withCredentials: true
        })
      console.log("vdon", res.data)
      dispatch(addUser(res.data))
      setShowToast(true)
      setTimeout(()=>{
        setShowToast(false)
      },3000)
      return navigate("/")
    } catch (err) {
      setError("ERROR: " + "Invalid Credentials ?")
      console.log(err)
    }
  }
  return (
    <div className="flex justify-center m-4 relative">
      {showToast && <div className="toast toast-top toast-center fixed top-10 z-10">
        <div className="alert alert-success">
          <span>✅{loginForm ? "login sucessfull ." : "Signup Sucessfull."}  </span>
        </div>
      </div>}
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">{loginForm ? "LOGIN" : "Signup"}</h2>
          <div>
            {loginForm && (<> <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">What is your Email ?{email}</span>
              </div>
              <input type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
              <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                  <span className="label-text">What is your Password ?{Password}</span>
                </div>
                <input type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs" />
              </label></>)}
            {/* njdsj
            mdvj
            kck */}
            {loginForm ? null : (<><label className="form-control w-full max-w-xs my-4">
              <div className="label">
                <span className="label-text">FirstName:</span>
              </div>
              <input type="text"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs" />
            </label>
              <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                  <span className="label-text">lastName: </span>
                </div>
                <input type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs" />
              </label>
              <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                  <span className="label-text">Age: </span>
                </div>
                <input type="text"
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs" />
              </label>
              <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                  <span className="label-text">Gender:</span>
                </div>
                <input type="text"
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs" />
              </label>
              <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                  <span className="label-text">Email Id:</span>
                </div>
                <input type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs" />
              </label>
              <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                  <span className="label-text">Password :</span>
                </div>
                <input type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs" />
              </label></>)}
          </div>
          {loginForm && <div className="flex  card-actions justify-center flex-row-reverse items-center">
            <p className='text-red-600'>{error}</p>
            <button className="btn btn-primary"
              onClick={handleLogin}
            >Login</button>
            <button className="btn btn-secondary" onClick={() => setLoginForm(false)} >New User</button>
          </div>}
          {loginForm ? null : (<><div className="flex card-actions justify-center flex-row-reverse items-center">
            <p className='text-red-600'>{error}</p>
            <button className="btn btn-primary"
              onClick={handleSignup}
            >signup</button>
            <button className="btn btn-secondary" onClick={() => setLoginForm(true)} >Signin</button>
          </div></>)}
        </div>
      </div>
    </div>

  )
}

export default Login