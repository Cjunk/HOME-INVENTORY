/*
    The main header / banner. 
            <div className="banner-container">
                <img className="bannerImg" src='/img/Image1.jpg' alt="Describe the content of the image"></img>
            </div>
      <NavigationBar className="NavigationBar" {...props} />
      <Sidebar className="Sidebar" />

*/

import React from "react";
import "./styles/header.css";

import Hero from "./hero";
import Sidebar from "./sideBar";
import NavigationBar from "./navigationBar";

function Header(props) {
  return (
    <div>
      <div className="header-container">
        <div className="img-container">
          <img src="../img/logo.webp" />
        </div>
        <div className="main-content">
          <Hero />
          <NavigationBar {...props} />
        </div>
        <p1>side panel goes here</p1>
      </div>
    </div>
  );
}
export default Header;
