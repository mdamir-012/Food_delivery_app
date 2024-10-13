// import React from 'react'
import "./Navbar.css"
import { assets } from "../../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home")

    
   const {getTotalCartAmount} =useContext(StoreContext);

    
  return (
    <div className="navbar">
     <Link to={"/"}> <img src={assets.logo} alt="" className="logo" /></Link>

      <ul className="navbar_menu">
        <Link to={"/"} onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href="#explore_menu_id" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href="#app_download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>

      <div className="navbar_right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar_search_icon">
         <Link to={"/cart"}> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
