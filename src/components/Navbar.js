import React from "react";
import logo from "../images/reactjs-icon.svg"

function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} width="50px" alt="logo" />
                <h3 className="logo-name">ReactFacts</h3>
            </div>
            <div className="nav-desc-container">
                <h4 className="nav-desc">React Course - Project 1</h4>
            </div>
        </nav>
    )
}

export default Navbar