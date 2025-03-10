import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);
    return(
        <nav className="navbar">
            <NavLink to="/portfolio" className="home"><p>Saaiq Ahmed</p></NavLink>
            <div className="menu" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={open ? "open" : ""}>
                <li><NavLink to="/about">About Me</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;