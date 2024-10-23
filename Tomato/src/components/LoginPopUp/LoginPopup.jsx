import React, { useState, useEffect } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../content/StoreContext'
import axios from 'axios'
const LoginPopup = ({ setshowlogin }) => {
  const [currstate, setcurrstate] = useState("SignUp")
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  })
  const {url,settoken}=useContext(StoreContext)

  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }
  const onlogin=async(event)=>{
   event.preventDefault()
   let newurl=url;
   if(currstate==="login"){
      newurl+="/api/user/login"
   }else{
      newurl+="/api/user/register"
   }
   const response=await axios.post(newurl,data)
   if(response.data.success){
      settoken(response.data.token)
      setshowlogin(false)
      localStorage.setItem("token",response.data.token)
   }else{
      alert(response.data.message)
   }
  }
  return (
    <div className='loginpopup'>
      <form onSubmit={onlogin} className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className='login-popup-inputs'>
          {currstate === "Login" ? null : (
            <input
              type="text"
              name='name'
              onChange={onchangehandler}
              value={data.name}
              placeholder='Enter Your name'
              required
            />
          )}
          <input
            type="email"
            name='email'
            onChange={onchangehandler}
            value={data.email}
            placeholder='Enter Your Email'
            required
          />
          <input
            type="password"
            name='password'
            onChange={onchangehandler}
            value={data.password}
            placeholder='Enter Your Password'
            required
          />
        </div>
        <button type="submit">{currstate === "SignUp" ? "SignUp" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I Agree To The Terms And Policy</p>
        </div>
        {currstate === "SignUp" ? (
          <p className='meow'>Already Have An Account <span onClick={() => setcurrstate("Login")}>Login here</span></p>
        ) : (
          <p className='meow'>Create A New Account <span onClick={() => setcurrstate("SignUp")}>Click here</span></p>
        )} 
      </form>
    </div>
  )
}

export default LoginPopup
