import { Box, Flex, Grid, List, ListItem, Image } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-scroll";
import "../styles/techsection.css";
// import fsk1 from "../images/fhsk.png";

const TechSection = () => {
  return (
    <Flex className="tech-section">
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
            <Box className="stack-card">
              <Flex className="stack-img" id="fg1">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">HTML</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="fg2">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">CSS</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="fg3">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">REDUX</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="fg4">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">JS</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="fg5">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">REACT</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="fg6">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">BOOTSTRAP</Box>
            </Box>
          </Flex>
        </Box>
        <Box className="skill-container">
          <Box className="skill-catigory">
            <h2>BACK-END SKILLS</h2>
          </Box>
          <Flex className="stacks-container">
            <Box className="stack-card">
              <Flex className="stack-img" id="bg1">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">MONGO-DB</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="bg2">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">EXPRESS-JS</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="bg3">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">GIT</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="bg4">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">NODE-JS</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="bg5">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">POSTMAN</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="bg6">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">BURP SUITE</Box>
            </Box>
          </Flex>
        </Box>
        <Box className="skill-container">
          <Box className="skill-catigory">
            <h2>SOFT SKILLS</h2>
          </Box>
          <Flex className="stacks-container">
            <Box className="stack-card">
              <Flex className="stack-img" id="sg1">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">PROBLEM SOLVING</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="sg2">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">BEING POSITIVE</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="sg3">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">TEAM PLAYER</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="sg4">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">GOOD LISTENER</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="sg5">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis"> COMMUNICATION</Box>
            </Box>
            <Box className="stack-card">
              <Flex className="stack-img" id="sg6">
                {/* <Image src="" alt="" /> */}
              </Flex>
              <Box className="stack-card-dis">CREATIVITY SKILLS</Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TechSection;
