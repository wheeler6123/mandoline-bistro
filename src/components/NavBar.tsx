import React from "react";
import Logo from '../assets/images/Mandoline300x120.png'
import Rooster from '../assets/images/rooster60x36.png'
import { NavHashLink as NavLink } from 'react-router-hash-link';


const NavBar = () => {

    return (
        <div className="nav-container">
            <div className="logo-container">
                <NavLink smooth to="#top" className="nav-link">
                    <img src={Logo} alt="logo" />
                </NavLink>
            </div>
            <div className='nav-link-container'>
                <NavLink smooth to="#about" className="nav-link">
                    About Us
                </NavLink>
                <NavLink smooth to="/menu" className="nav-link">
                    Menu
                </NavLink>
                <NavLink smooth to="#contact" className="nav-link">
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