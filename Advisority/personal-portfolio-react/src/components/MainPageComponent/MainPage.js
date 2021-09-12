import React from 'react'
import { About } from '../AboutComponent/About'
import { Footer } from '../FooterComponent/Footer'
import { Navbar } from '../NavbarComponent/Navbar'
import { Projects } from '../ProjectsComponent/Projects'
import { Resume } from '../ResumeComponent/Resume'
import './styles.css'

const MainPage = () => {
    
    return (
        <div className="main-container">
            <Navbar sticky={true}/>
            <About/>
            <Projects/>
            <Resume/>
            <Footer/>
        </div>
    )
}

export default MainPage
