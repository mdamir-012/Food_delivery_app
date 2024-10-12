// import React from 'react'

import { assets } from "../../assets/frontend_assets/assets";
import "./AppDownload.css";


const AppDownload = () => {
  return (
    <div className="app_download" id="app_download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app_download_platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
