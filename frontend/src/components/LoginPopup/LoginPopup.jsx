// import React from 'react'
import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState]=useState("Login");

  return (
    <div className="Login_popup">
      <form  className="login_popup_container">
        <div className="login_popup_title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login_popup_inputs">
        {currentState==="Login"?<></>: <input type="text" placeholder="Your name" required />}
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Password" required />
        </div>
        <button>{currentState==="Sign up"?"Create account":"Login"}</button>
        <div className="login_popup_condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"? <p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
        : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        
      </form>
    </div>
  )
}

export default LoginPopup
