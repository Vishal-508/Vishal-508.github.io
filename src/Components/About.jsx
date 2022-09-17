import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/about.css";
import about from "../images/hero3.png";

const About = () => {
  return (
    <Flex className="about-section">
      <Box position="relative" w="10%">
        <Box className="label">about</Box>
      </Box>
      <Flex w="100%" align="center">
        <Flex className="about-container">
          <Flex className="img-section">
            <Box w="100%">
              <Image
                src={about}
                alt="vishal"
                // background="black"
                background="hsla(0,0%,75%,1)"
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
                Hello, I am Vishal Sharma and I am a Full-stack developer. I
                live and work in India. I spend most of my day, experimenting
                with HTML, CSS and JavaScript (and its most of frameworks). I'm
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
      </Flex>
    </Flex>
  );
};

export default About;
