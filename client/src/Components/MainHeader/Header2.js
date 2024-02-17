import React from "react";
import "./styles/header2.css";
import Hero from "./hero";
import NavigationBar from "./navigationbar2";
function Header(props) {
    return (
        <div className = "header-container">
                <div className="main-content">
                    <Hero />
                    <NavigationBar {...props} />
                </div>
        </div>
    );
}
export default Header;