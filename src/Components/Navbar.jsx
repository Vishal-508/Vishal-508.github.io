import { Box, Drawer, Text, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo1.png";
import SideNav from "./SideNav";
const Navbar = () => {
  return (
    <div className="nav-section">
      <Flex flexDirection="row" color="white">
        <Flex justify="center" align="center" fontWeight="bold">
          <Image src={logo} w="70px" />{" "}
          <Text fontSize="2xl" fontWeight="bold">
            VISHAL
          </Text>
        
          <Box   >
            <Box></Box>
            <Box></Box>
          </Box>
        </Flex>
        <Spacer />
        <Box>
          <SideNav />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
