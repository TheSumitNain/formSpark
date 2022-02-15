import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMedia, setShowMedia] = useState(false);
    return (
        <>
            <nav className="main-div">
                <div className={showMedia ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="social-media">
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMedia(!showMedia)}>
                            <GiHamburgerMenu className="hamburger" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;