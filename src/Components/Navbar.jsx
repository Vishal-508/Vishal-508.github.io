import {
  Box,
  Drawer,
  Text,
  Flex,
  Image,
  Spacer,
  List,
  ListItem,

} from "@chakra-ui/react";
import React, { useRef } from "react";
import "../styles/navbar.css";
import logo from "../images/logo1.png";
import SideNav from "./SideNav";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
//  const dom=useRef("")
// var classes=["nav-element"]
//   const handleClick=(e)=>{
//      const activePage=window.location.href;
     
//      console.log(e.target)
//      console.log(activePage)
//   }




  return (
    <div className="nav-section">
      <Flex flexDirection="row" color="#878787">
        <Flex justify="center" align="center" fontWeight="bold" w="80%">
          <Image src={logo} w="70px" />{" "}
          <Text fontSize="2xl" fontWeight="bold">
            <Box as="span" color="#FF014F" >VISH</Box><Box as="span" color="#1E2125" >A!!</Box>
          </Text>
          <Spacer />
          {/* <List display="flex" justifyContent="space-evenly" w="70%">
            <ListItem>About</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Statistics</ListItem>
            <ListItem>Contact</ListItem>
          </List> */}
          <List
          //  display="flex" justifyContent="center" w="70%"
           className="nav-element-con" >
                <a href="#Home"   value="#Home"  >
                  
                  <ListItem  className="nav-element"  > HOME</ListItem>
                </a>
                
                  {/* <NavLink to="Home" hashspy={true} spy={true} smooth={true} delay={100} >
                  <ListItem  className="nav-element"  > HOME</ListItem>
                  </NavLink> */}
               
                <a href="#About"  value={"#About"} >
                  <ListItem className="nav-element"  >ABOUT</ListItem>
                </a>

                <a href="#Skills"  value={"#Skills"} >
                  <ListItem className="nav-element" >SKILLS</ListItem>
                </a>
                {/* <NavLink to="Projects" hashspy={true} spy={true} smooth={true} delay={100}  >
                  <ListItem  className="nav-element"  > PROJECTS</ListItem>
                  </NavLink> */}
                <a href="#Projects">
                  <ListItem className="nav-element" >PROJECTS</ListItem>
                </a>
                <a href="#Statistics">
                  <ListItem className="nav-element" >STATISTICS</ListItem>
                </a>
                <a href="#Contact">
                  <ListItem className="nav-element" >CONTACT</ListItem>
                </a>
              </List>
        </Flex>
        <Spacer />
        <Box className="nav-sidebar" >
          <SideNav />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
