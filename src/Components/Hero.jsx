import React from "react";
import "../App.css";
import "../styles/hero.css";
import hero from "../images/vishal-hero-image.jpg";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import hrr from "../images/h555.png";
import hr from "../images/hn.svg";
import Resume from "../Utils/Vishal_Sharma_Resume.pdf"

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
        
        {/* resume here */}
        <a
          className="res-button" target="_blank"
          href={Resume}
          download
          > <button style={{fontWeight:"700"}}  onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1YZmRvgyC2DaBox3dZPNnXUHGnSJXBLNX/view?usp=sharing"
            )
          }>Resume</button>
          
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


// href="https://drive.google.com/file/d/1_0iZdvcTZs28oBBcwuxHw0w3Rl3hmIQ0/view?usp=sharing"