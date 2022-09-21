import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/about.css";
import about from "../images/hero3.png";
import { extendTheme } from "@chakra-ui/react";
const About = () => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ breakpoints });
  return (
    <Center className="about-section">
      {/* <Box className="divider-sec" > </Box> */}
      <Box className="about-container">
        <Box className="sub-header">
          <span>more</span>
          <h2>About Me</h2>
        </Box>
        <Box className="about-sub-container">
          <Center className="about-sub-sub">
            <Box className="about-img-con" 
           
            // w={{ base:"350px", sm:"40%",md:"80%" }} 
            >
              <Box>
                <Image src={about} alt="Vishal" />
              </Box>
              <Box>
                <span>MERN-STACK DEVELOPER</span>
                <h3>Vishal Sharma</h3>
                <span></span>
              </Box>
            </Box>
            <Box className="about-dis-con" 
            
            w={{ base:"350px", lg:"660px", md:"500px",sm:"450px"}}
             >
              <Text pb="30px" display="inline-block" >
                Hello, I am Vishal Sharma and I am an Engineer. I'm obsessed
                with making things and even more obsessed with making things
                better.
              </Text>
              
              <Text display="inline-block" mb="15px" >
                My specialty is full website strategy, design and development,
                making pixel magic in photoshop and turning it into beautiful,
                semantic HTML & CSS. Giving logic with React, Maintain with
                Redux, Testing with Jest and Deploy with Heroku.
              </Text>
            </Box>
          </Center>
        </Box>
      </Box>
    </Center>
  );
};

export default About;

{
  /* <Box position="relative" w="10%">
        <Box className="label">about</Box>
      </Box> */
}
{
  /* <Flex w="100%" align="center">
        <Flex className="about-container">
          <Flex className="img-section">
            <Box w="100%">
              <Image
                src={about}
                alt="vishal"
                // background="black"
                // background="hsla(0,0%,75%,1)"
                background="#3c3e41"
                borderRadius="15px"
              />
            </Box>
            <Box
              alignSelf="center"
              alignItems="center"
              mb="30px"
              fontSize="38px"
              color="white"
              fontWeight="bold"
            >
              <Box as="span" color="#E699B8">
                Vishal{" "}
              </Box>{" "}
              Sharma
            </Box>
          </Flex>
          <Flex className="containt-section">
            <Box>
              <Text fontSize="6xl" fontWeight="bold" mb="40px">
                {" "}
                <Box as="span" color="#E699B8">
                  More{" "}
                </Box>{" "}
                About Me.{" "}
              </Text>
              <Text fontSize="2xl" color="#BFBFBF">
                Hello, I am Vishal Sharma and I am an Engineer. I'm
                obsessed with making things and even more obsessed with making
                things better.
                <Box mt="30px">
                  {" "}
                  My specialty is full website strategy, design and development,
                  making pixel magic in photoshop and turning it into beautiful,
                  semantic HTML & CSS. Giving logic with React, Maintain with
                  Redux, Testing with Jest and Deploy with Heroku.
                </Box>
              </Text>{" "}
            </Box>
          </Flex>
        </Flex>
      </Flex> */
}
