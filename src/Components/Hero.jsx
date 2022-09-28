import React from "react";
import "../App.css";
import "../styles/hero.css";
import hero from "../images/vishal-hero-image.jpg";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import hrr from "../images/h555.png";
import hr from "../images/hn.svg";

import { Box, Flex, Text, Image, Grid } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Flex className="hero-section" >
      <Grid className="main-hero-con" >     
      <Flex  className="hero-des" >
        <Text className="hero-text"
          alignItems="left"
          fontSize={{ base: "48px", md: "48px", lg: "60px" }}
        >
          Hi, I'm <span style={{ color: "#FF014F" }}>Vishal </span>
        </Text>
        <Text fontSize={{ base: "24px", md: "32pxpx", lg: "48px" }}>
          {" "}
          a Full Stack Developer.
        </Text>
        

        <a
          className="res-button" target="_blank"
          href="https://drive.google.com/file/d/1_0iZdvcTZs28oBBcwuxHw0w3Rl3hmIQ0/view?usp=sharing"
          download="Vishal resume"
          >
          Resume
        </a>
         
      </Flex>
      <Box className="hero-img" >
        <Image src={hrr} />
      </Box>
      </Grid>
    </Flex>
  );
};

export default Hero;

{
  /* <Box className="hero-image" position="relative">
  <Image src={hero2} alt="Vishal" position="absolute" bottom="0" />
</Box> */
}
