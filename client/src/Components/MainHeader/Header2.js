import React from "react";
import "./styles/header2.css";
import Hero from "./hero";
import NavigationBar from "./navigationbar2";
function Header(props) {
    return (
        <main className="header-container">
            <Hero />
            <NavigationBar {...props} />
        </main>
    );
}
export default Header;