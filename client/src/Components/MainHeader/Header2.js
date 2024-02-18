import React from "react";
import "./styles/header2.css";
import Hero from "./hero";
import NavigationBar from "./navigationbar2";
import YouInventoryNavBar from "./YouInventoryNavBar.js"
function Header(props) {
    console.log("HERE ARE THE PROPS",props)
    return (
        <div className="header-container">
            <Hero />
            <NavigationBar {...props} />
            <YouInventoryNavBar {...props} />
        </div>
    );
}
export default Header;