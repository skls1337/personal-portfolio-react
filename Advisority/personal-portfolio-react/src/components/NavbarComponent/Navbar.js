import React from 'react'

import './styles.css'
import Logo from '../../assets/Logo.js'



export const Navbar = ({sticky}) => {
    return (
        <div className="nav-container">
            <nav className={sticky?"navbar navbar-sticky":"navbar"}>
                <div className="navbar--logo-holder">
                    {sticky? <Logo/>:<h1>Something</h1>}
                </div>
                <ul className="navbar--link">
                    <li className="navbar--link-item"><span> <a href="#about-component"> About</a></span></li>
                    <li className="navbar--link-item"><span> <a href="#projects-component">Projects</a></span></li>
                    <li className="navbar--link-item"><span><a href="#resume-component">Resume</a></span></li>
                   
                    
                </ul>
            </nav>
        </div>
    )
}
