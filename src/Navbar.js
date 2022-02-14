import React, { useState } from "react";
// import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMedia, setShowMedia] = useState(false);
    return (
        <>
            <nav className="main-div">
                <div className={showMedia ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li> <a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
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