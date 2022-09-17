import React from 'react'
import styles from "../App.css"
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
import Statistics from './Statistics'
import TechSection from './TechSection'
const Home = () => {
  return (

    <div className="home" >
        <div style={{position:'fixed', top:0 , zIndex:"2"}} >
        <Navbar/>
        </div>
        <Hero/>
        <About/>
        <TechSection/>
        <Projects/>
        <Statistics/>
        <Contact/>
        <div style={{position:'fixed', bottom:0}} >
            <Footer/>
        </div>
    </div>
  )
}

export default Home