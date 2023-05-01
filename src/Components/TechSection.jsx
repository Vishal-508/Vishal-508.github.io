import { Box, Flex, Grid, List, ListItem, Image } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-scroll";
import "../styles/techsection.css";
// import fsk1 from "../images/fhsk.png";

const TechSection = () => {
  return (
    <Flex className="tech-section" id="skills">
      <Box className="sub-header">
        <span>Playing with</span>
        <h2>Skills</h2>
      </Box>
      <Flex className="tech-sub-sec">
        <Box className="skill-container">
          <Box className="skill-catigory">
            <h2>FRONT-END SKILLS</h2>
          </Box>
          <Flex className="stacks-container">
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img " id="fg1">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">HTML</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="fg2">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">CSS</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="fg3">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">REDUX</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="fg4">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">JS</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="fg5">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">REACT</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="fg6">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">BOOTSTRAP</Box>
            </Box>
          </Flex>
        </Box>
        <Box className="skill-container">
          <Box className="skill-catigory">
            <h2>BACK-END SKILLS</h2>
          </Box>
          <Flex className="stacks-container">
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="bg1">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">MONGO-DB</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="bg2">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">EXPRESS-JS</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="bg3">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">GIT</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="bg4">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">NODE-JS</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="bg5">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">POSTMAN</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="bg6">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">BURP SUITE</Box>
            </Box>
          </Flex>
        </Box>
        <Box className="skill-container">
          <Box className="skill-catigory">
            <h2>SOFT SKILLS</h2>
          </Box>
          <Flex className="stacks-container">
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="sg1">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">PROBLEM SOLVING</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="sg2">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">BEING POSITIVE</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="sg3">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">TEAM PLAYER</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="sg4">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">GOOD LISTENER</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="sg5">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name"> COMMUNICATION</Box>
            </Box>
            <Box className="stack-card skills-card">
              <Flex className="stack-img skills-card-img" id="sg6">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis skills-card-name">CREATIVITY SKILLS</Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TechSection;
