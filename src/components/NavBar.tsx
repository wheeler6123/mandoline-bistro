import React from "react";
import Logo from '../assets/images/Mandoline300x120.png'
import Rooster from '../assets/images/rooster60x36.png'
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return (
        <div className="nav-container">
            <div className="logo-container">
                <img src={Logo} alt="logo" />
            </div>
            <div className='nav-link-container'>
                <NavLink to="/about" className="nav-link">
                    About Us
                </NavLink>
                <NavLink to="/menu" className="nav-link">
                    Menu
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
            </div>
            <div>
                <img src={Rooster} alt="rooster" />
            </div>
        </div>
    )
}

export default NavBar