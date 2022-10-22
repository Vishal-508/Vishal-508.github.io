import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import "../styles/projects.css";
import prj1 from "../images/prj1.png";
import prj2 from "../images/prj2.png";
// import prj3 from "../images/prj3.png";
// import prj4 from "../images/prj4.png";
// import prj5 from "../images/prj5.png";
const Projects = () => {
  return (
    <Flex className="project-section">
      {/* <Box className="divider-sec"></Box> */}
      {/* <Box position="relative" w="10%">
        <Box className="label">Projects</Box>
      </Box> */}
      <Box className="sub-header">
        <span>Some Master Piece of</span>
        <h2>My Projects</h2>
      </Box>
    
        <Flex className="project-sub-con">
          
          <Box className="project-card">
            <Box className="project-sub-card">
              <Box className="project-sub-image" id="p2">
                {/* <Image src={prj1} alt="Bewakoof.com" /> */}
              </Box>
              <Box className="project-sub-des">
                <Box>TRAVELING</Box>
                <Box>ORBITZ.COM (CLONE)</Box>
                <p>Orbitz is online booking platforms that make it simple to book flights, hotels and rental cars.</p>
                <Flex className="tech-stacks">
                  <Box>JAVASCRIPT</Box>
                  <Box>HTML</Box>
                  <Box>CHAKRA-UI</Box>
                  <Box>API</Box>
                </Flex>
                <Flex className="project-card-btn">
                  <Button><a target="_blank" href="https://github.com/Vishal-508/second-collab-project"> VIEW CODE</a></Button>
                  <Spacer />
                  <Button><a target="_blank" href="https://dynamic-peony-8ff545.netlify.app/"> LIVE PROJECT</a></Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box className="project-card">
            <Box className="project-sub-card">
              <Box className="project-sub-image" id="p1">
                {/* <Image src={prj1} alt="Bewakoof.com" /> */}
              </Box>
              <Box className="project-sub-des">
                <Box>E-COMMERCE</Box>
                <Box>BEWAKOOF.COM (CLONE)</Box>
                <p>Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy.</p>
                <Flex className="tech-stacks">
                  <Box>REACT</Box>
                  <Box>JAVASCRIPT</Box>
                  <Box>HTML</Box>
                  <Box>CHAKRA-UI</Box>
                  <Box>API</Box>
                  <Box>JSON-SERVER</Box>
                </Flex>
                <Flex className="project-card-btn">
                  <Button><a target="_blank" href="https://github.com/Vishal-508/Bewakoof.com-clone-"> VIEW CODE</a></Button>
                  <Spacer />
                  <Button><a target="_blank" href="https://jolly-dusk-117b82.netlify.app"> LIVE PROJECT</a></Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box className="project-card">
            <Box className="project-sub-card">
              <Box className="project-sub-image" id="p3">
                {/* <Image src={prj1} alt="Bewakoof.com" /> */}
              </Box>
              <Box className="project-sub-des">
                <Box>ANIMAL-LOVERS</Box>
                <Box>tINDOG.COM (CLONE)</Box>
                <p>Want a pet, Tindog website helps makes your journey easy.</p>
                <Flex className="tech-stacks">
                  <Box>JAVASCRIPT</Box>
                  <Box>HTML</Box>
                  <Box>BOOTSTRAP</Box>
                  <Box>CSS</Box>
                </Flex>
                <Flex className="project-card-btn">
                
                <Button><a target="_blank" href="https://github.com/Vishal-508/Project-1/tree/main/TinDog"> VIEW CODE</a></Button>
                  <Spacer />
                  <Button><a target="_blank" href="https://zingy-crumble-991803.netlify.app/"> LIVE PROJECT</a></Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box className="project-card">
            <Box className="project-sub-card">
              <Box className="project-sub-image" id="p4">
                {/* <Image src={prj1} alt="Bewakoof.com" /> */}
              </Box>
              <Box className="project-sub-des">
                <Box>APPLICATION</Box>
                <Box>DICE GAME</Box>
                <p>This is amazing dice game just play for toss. </p>
                <Flex className="tech-stacks">
                  <Box>JAVASCRIPT</Box>
                  <Box>HTML</Box>

                  <Box>CSS</Box>
                  
                </Flex>
                <Flex className="project-card-btn">
                  <Button><a target="_blank" href="https://github.com/Vishal-508/My-Portfolio-Site/tree/main/my-Projects/DICE-GAME/Dicee%20Challenge"> VIEW CODE</a></Button>
                  <Spacer />
                  <Button><a target="_blank" href="https://fancy-faloodeh-47054b.netlify.app/"> LIVE PROJECT</a></Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box className="project-card">
            <Box className="project-sub-card">
              <Box className="project-sub-image" id="p5">
                {/* <Image src={prj1} alt="Bewakoof.com" /> */}
              </Box>
              <Box className="project-sub-des">
                <Box>APPLICATION</Box>
                <Box>DRUM KIT GAME </Box>
                <p>This is lovely drum set application, just check it out and enjoy it.</p>
                <Flex className="tech-stacks">
                  <Box>JAVASCRIPT</Box>
                  <Box>HTML</Box>
                  <Box>CSS</Box>
                  <Box>JqUERY</Box>
                </Flex>
                <Flex className="project-card-btn">
                  <Button><a target="_blank" href="https://github.com/Vishal-508/My-Portfolio-Site/tree/main/my-Projects/DRUM-KIT-GAME/Drum%20Kit"> VIEW CODE</a></Button>
                  <Spacer />
                  <Button> <a target="_blank" href="https://moonlit-liger-775611.netlify.app/"> LIVE PROJECT</a></Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      
    </Flex>
  );
};

export default Projects;
