import React from 'react'
import './styles.css'
import Logo from '../../assets/programmer.svg'

export const Navbar = ({sticky}) => {
    return (
        <div className="nav-container">
            <nav className={sticky?"navbar navbar-sticky":"navbar"}>
                <div className="navbar--logo-holder">
                    {sticky? <img src={Logo} alt="logo"/>:<h1>Something</h1>}
                </div>
                <ul className="navbar--link">
                    <li className="navbar--link-item"><span>About</span></li>
                    <li className="navbar--link-item"><span>Projects</span></li>
                    <li className="navbar--link-item"><span>Resume</span></li>
                   
                    
                </ul>
            </nav>
        </div>
    )
}
