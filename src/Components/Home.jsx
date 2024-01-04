import {
  Box,
  Flex,
  List,
  ListItem,
  Spacer,
  Image,
  Text,
} from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";
import React from "react";
import logo from "../images/logo1.png";
import SideNav from "./SideNav";
import { Element, Link } from "react-scroll";
import styles from "../App.css";
import "../styles/home.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Statistics from "./Statistics";
import TechSection from "./TechSection";
const Home = () => {
  return (

    <div className="home" id="home-sec" >
      <ScrollToTop smooth height="20" width="20"  className="scroll-btn"  />
      <div style={{ position: "fixed", top: 0, zIndex: "2",width:"100%" }}>
        <Navbar/>
      
      </div>

      <section id="hero-sec">
        <Hero />
      </section>
      
      <section id="about-sec">
        <About />
      </section>
     
      <section id="skills-sec">
        {" "}
        <TechSection />
      </section>
      
      {/* <section id="projects-sec">
        <Projects />
      </section> */}
      
      {/* <section id="statistics-sec">
        <Statistics />
      </section> */}
      
      {/* <section id="contact-sec">
        <Contact />
      </section> */}

      <div style={{ position: "fixed", bottom: 0 }}>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;


  {/* <div className="nav-section">
          <Flex flexDirection="row" color="white">
            <Flex justify="center" align="center" fontWeight="bold" w="80%">
              <Image src={logo} w="70px" />{" "}
              <Text fontSize="2xl" fontWeight="bold">
                VISHAL
              </Text>
              <Spacer />
              
              <List display="flex" justifyContent="space-evenly" w="70%">
                <a href="#Home">
                  <ListItem>Home</ListItem>
                </a>

                <a href="#About">
                  <ListItem>About</ListItem>
                </a>

                <a href="#Skills">
                  <ListItem>Skills</ListItem>
                </a>
                <a href="#Projects">
                  <ListItem>Projects</ListItem>
                </a>
                <a href="#Statistics">
                  <ListItem>Statistics</ListItem>
                </a>
                <a href="#Contact">
                  <ListItem>Contact</ListItem>
                </a>
              </List>
            </Flex>
            <Spacer />
            <Box>
              <SideNav />
            </Box>
          </Flex>
        </div> */}