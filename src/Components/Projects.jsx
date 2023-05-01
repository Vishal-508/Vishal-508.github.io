import { Box, Button, Flex, Image, Spacer, Tabs, TabList, TabPanels, Tab, TabPanel, transition } from "@chakra-ui/react";
import React from "react";
import "../styles/projects.css";
import prj1 from "../images/prj1.png";
import prj2 from "../images/prj6.png";
import prj3 from "../images/prj3.png";
import prj4 from "../images/prj4.png";
import prj5 from "../images/prj5.png";
import ProjectCard from "./ProjectCard";
// import prj3 from "../images/prj3.png";
// import prj4 from "../images/prj4.png";
// import prj5 from "../images/prj5.png";
const Projects = () => {
  const fullstackProjectArray=[
    {
      image:prj1,
      project_type:"E-COMMERCE",
      name:"BEWAKOOF.COM",
      tech_stacks:["TYPESCRIPT", "REACT", "REDUX", "CHAKRA-UI", "NODEJS", "MONGO-DB", "MONGOOSE", "JWT", "BCRYPT"],
      discription:"Online Shopping Made Hassle-Free, Convenient & Super-Exciting With Bewakoof.com. Shop Now! All the Latest Trends are Just a Click Away! Easy Shopping, Secure Payments & Cool Offers. Shop by Designs. Highlights: Customer Service Available, App Available.",
      code_link:"https://github.com/Vishal-508/bkffrontend",
      live_link:"https://deft-macaron-b85ab0.netlify.app/",

    },
    {
      image:prj2,
      project_type:"E-COMMERCE",
      name:"BEAUTY HOLIC.COM",
      tech_stacks:["JAVASCRIPT", "REACT", "REDUX", "CHAKRA-UI", "NODEJS", "MONGO-DB", "MONGOOSE", "JWT", "BCRYPT"],
      discription:"Beautyholic is India’s fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products.",
      code_link:"https://github.com/shivamgupta8482/beautyholic",
      live_link:"https://boisterous-licorice-abefb7.netlify.app",

    }
  ]
  const applicationProjectArray=[
    {
      image:prj5,
      project_type:"APPLICATION",
      name:"DRUM KIT GAME",
      tech_stacks:["JAVASCRIPT", "HTML", "CSS", "JQUERY"],
      discription:"Virtual drums for music teachers and students. Play the virtual drum kit using your computer keyboard. Then apply your new skills to real drums where you can play beats for drums with virtual drum kits and pads.This is lovely drum set application, just check it out and enjoy it.",
      code_link:"https://github.com/Vishal-508/My-Portfolio-Site/tree/main/my-Projects/DRUM-KIT-GAME/Drum%20Kit",
      live_link:"https://moonlit-liger-775611.netlify.app/",

    },
    {
      image:prj4,
      project_type:"APPLICATION",
      name:"DICE GAME",
      tech_stacks:["JAVASCRIPT", "HTML", "CSS"],
      discription:"This is amazing dice game just play for toss. The Addictively Dicey Dice Game! ... Take a chance in Toss Up! It's a game of risk vs. reward in this high-stakes competition. The Toss Up Dice game makes an ideal travel game for families. An addictive game full of luck, strategy and suspense! Rolling greens means go, go!",
      code_link:"https://github.com/Vishal-508/My-Portfolio-Site/tree/main/my-Projects/DICE-GAME/Dicee%20Challenge",
      live_link:"https://fancy-faloodeh-47054b.netlify.app/",

    },
    {
      image:prj3,
      project_type:"ANIMAL-LOVERS",
      name:"tINDOG.COM",
      tech_stacks:["JAVASCRIPT", "HTML", "CSS","BOOTSTRAP"],
      discription:"It's a simple web page for dogs. It is a Startup landing page for a fictional application named TinDog. TinDog allows the user to find other dogs & their owners nearby in the swipe left/right style made famous by Tinder. Want a pet, Tindog website helps makes your journey easy.",
      code_link:"https://github.com/Vishal-508/Project-1/tree/main/TinDog",
      live_link:"https://zingy-crumble-991803.netlify.app/",

    }
  ]

  return (
    <Flex className="project-section" id="projects" >
      {/* <Box className="divider-sec"></Box> */}
      {/* <Box position="relative" w="10%">
        <Box className="label">Projects</Box>
      </Box> */}
      <Box className="sub-header"  >
        <span>Some Master Piece of</span>
        <h2>My Projects</h2>
      </Box>

      <Flex className="project-sub-con"  w={{lg:"80%",md:"80%", sm:"95%", base:"92%"}}  >

        <Tabs mt="80px" w={"100%"} align={"center"} variant='unstyled'  >
          <TabList boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} fontWeight={"500"} color="#212428" borderRadius={"10px"} bg={"linear-gradient(145deg, #e2e8ec, #ffffff)"} >
            <Tab w="50%" fontSize={"18px"} p="30px 10px" _selected={{ color: '#FF014F', bg: 'linear-gradient(145deg, #e2e8ec, #ffffff)', borderRadius: "10px", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }}>FULL-STACK PROJECTS</Tab>
            <Tab w="50%" fontSize={"18px"} p="30px 10px" _selected={{ color: '#FF014F', bg: 'linear-gradient(145deg, #e2e8ec, #ffffff)', borderRadius: "10px", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }}>WEB-APPLICATIONS</Tab>
          </TabList>
          <TabPanels display={"flex"} flexDirection="column" >
            <TabPanel p="30px 0" >
              {fullstackProjectArray.map((item)=><ProjectCard {...item} />)}
              {/* <Flex className="project-card" boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} borderRadius={"10px"}  >

                <Box className="project-sub-image" w="50%" p="30px" borderRadius={"10px"} boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} _hover={{ bg: "linear-gradient(245deg, #e2e8ec, #ffffff", transition: "background .3s ease-in-out" }} bg="linear-gradient(145deg, #e2e8ec, #ffffff" >
                  <Box id="p1" borderRadius={"12px"} bgRepeat="no-repeat" bgPosition={"center center"} bgSize="cover" w="100%" h="100%"  >
                    <Box w="100%" h="100%" borderRadius={"12px"} _hover={{ border: "1.5px solid #eaeaea", background: "none", cursor: "pointer", transition: "background .3s ease-in-out", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} bg={"#3d3e4137"} >
                    </Box>
                  </Box>
                </Box>
                <Box className="project-sub-des"  >
                  <Box>E-COMMERCE</Box>
                  <Box fontSize={"26px"} >BEWAKOOF.COM </Box>
                  <Box as="p" lineHeight={"2"} m="20px 0" fontSize="17px" textAlign={"justify"}  >Online Shopping Made Hassle-Free, Convenient & Super-Exciting With Bewakoof.com. Shop Now! All the Latest Trends are Just a Click Away! Easy Shopping, Secure Payments & Cool Offers. Shop by Designs. Highlights: Customer Service Available, App Available.</Box>
                  <Flex className="tech-stacks">
                    <Box  > TYPESCRIPT</Box>
                    <Box  > REACT</Box>
                    <Box  > REDUX</Box>
                    <Box  > CHAKRA-UI</Box>
                    <Box  > NODEJS</Box>
                    <Box  > MONGO-DB</Box>
                    <Box  > MONGOOSE</Box>
                    <Box  > JWT</Box>
                    <Box  > BCRYPT</Box>
                  </Flex>
                  <Flex className="project-card-btn">
                    <Button><a target="_blank" href="https://github.com/Vishal-508/bkffrontend"> VIEW CODE</a></Button>
                    <Spacer />
                    <Button><a target="_blank" href="https://deft-macaron-b85ab0.netlify.app/"> LIVE PROJECT</a></Button>
                  </Flex>
                </Box>

              </Flex>
              <Flex className="project-card" boxShadow={"-5px -5px 15px #D1D9E6, 5px 5px 15px #ffffff"} borderRadius={"10px"}  >
                <Box className="project-sub-des"  >
                  <Box>E-COMMERCE</Box>
                  <Box fontSize={"26px"} >BEAUTY HOLIC.COM </Box>
                  <Box as="p" lineHeight={"2"} m="20px 0" fontSize="17px" textAlign={"justify"}  >Beautyholic is India’s fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products.</Box>
                  <Flex className="tech-stacks">
                    <Box  > JAVASCRIPT</Box>
                    <Box  > REACT</Box>
                    <Box  > REDUX</Box>
                    <Box  > CHAKRA-UI</Box>
                    <Box  > NODEJS</Box>
                    <Box  > MONGO-DB</Box>
                    <Box  > MONGOOSE</Box>
                    <Box  > JWT</Box>
                    <Box  > BCRYPT</Box>
                  </Flex>
                  <Flex className="project-card-btn">
                    <Button><a target="_blank" href="https://github.com/shivamgupta8482/beautyholic"> VIEW CODE</a></Button>
                    <Spacer />
                    <Button><a target="_blank" href="https://boisterous-licorice-abefb7.netlify.app"> LIVE PROJECT</a></Button>
                  </Flex>
                </Box>
                <Box className="project-sub-image" w="50%" p="30px" borderRadius={"10px"} boxShadow={"-5px -5px 15px #D1D9E6, 5px 5px 15px #ffffff"} _hover={{ bg: "linear-gradient(245deg, #e2e8ec, #ffffff", transition: "background .3s ease-in-out" }} bg="linear-gradient(145deg, #e2e8ec, #ffffff" >
                  <Box id="p2" borderRadius={"12px"} bgRepeat="no-repeat" bgPosition={"center center"} bgSize="cover" w="100%" h="100%"  >
                    <Box w="100%" h="100%" borderRadius={"12px"} _hover={{ border: "1.5px solid #eaeaea", background: "none", cursor: "pointer", transition: "background .3s ease-in-out", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} bg={"#3d3e4137"} >
                    </Box>
                  </Box>
                </Box>


              </Flex> */}
              
            </TabPanel>
            <TabPanel p="30px 0" >
            {applicationProjectArray.map((item)=><ProjectCard {...item} />)}
              {/* <Flex className="project-card" boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} borderRadius={"10px"}  >

                <Box className="project-sub-image" w="50%" p="30px" borderRadius={"10px"} boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} _hover={{ bg: "linear-gradient(245deg, #e2e8ec, #ffffff", transition: "background .3s ease-in-out" }} bg="linear-gradient(145deg, #e2e8ec, #ffffff" >
                  <Box id="p5" borderRadius={"12px"} bgRepeat="no-repeat" bgPosition={"center center"} bgSize="cover" w="100%" h="100%"  >
                    <Box w="100%" h="100%" borderRadius={"12px"} _hover={{ border: "1.5px solid #eaeaea", background: "none", cursor: "pointer", transition: "background .3s ease-in-out", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} bg={"#3d3e4137"} >
                    </Box>
                  </Box>
                </Box>
                <Box className="project-sub-des"  >
                  <Box>APPLICATION</Box>
                  <Box fontSize={"26px"} >DRUM KIT GAME</Box>
                  <Box as="p" lineHeight={"2"} m="20px 0" fontSize="17px" textAlign={"justify"}  >Virtual drums for music teachers and students. Play the virtual drum kit using your computer keyboard. Then apply your new skills to real drums where you can play beats for drums with virtual drum kits and pads.This is lovely drum set application, just check it out and enjoy it.</Box>
                  <Flex className="tech-stacks">
                  <Box>JAVASCRIPT</Box>
                  <Box>HTML</Box>
                  <Box>CSS</Box>
                  <Box>JQUERY</Box>
                  </Flex>
                  <Flex className="project-card-btn">
                    <Button><a target="_blank" href="https://github.com/Vishal-508/My-Portfolio-Site/tree/main/my-Projects/DRUM-KIT-GAME/Drum%20Kit"> VIEW CODE</a></Button>
                    <Spacer />
                    <Button><a target="_blank" href="https://moonlit-liger-775611.netlify.app/"> LIVE PROJECT</a></Button>
                  </Flex>
                </Box>

              </Flex>
              <Flex className="project-card" boxShadow={"-5px -5px 15px #D1D9E6, 5px 5px 15px #ffffff"} borderRadius={"10px"}  >
                <Box className="project-sub-des"  >
                  <Box>APPLICATION</Box>
                  <Box fontSize={"26px"} >DICE GAME </Box>
                  <Box as="p" lineHeight={"2"} m="20px 0" fontSize="17px" textAlign={"justify"}  >This is amazing dice game just play for toss. The Addictively Dicey Dice Game! ... Take a chance in Toss Up! It's a game of risk vs. reward in this high-stakes competition. The Toss Up Dice game makes an ideal travel game for families. An addictive game full of luck, strategy and suspense! Rolling greens means go, go, go! </Box>
                  <Flex className="tech-stacks">
                    <Box  > JAVASCRIPT</Box>
                    <Box  > HTML</Box>
                    <Box  > CSS</Box>
                  </Flex>
                  <Flex className="project-card-btn">
                    <Button><a target="_blank" href="https://github.com/Vishal-508/My-Portfolio-Site/tree/main/my-Projects/DICE-GAME/Dicee%20Challenge"> VIEW CODE</a></Button>
                    <Spacer />
                    <Button><a target="_blank" href="https://fancy-faloodeh-47054b.netlify.app/"> LIVE PROJECT</a></Button>
                  </Flex>
                </Box>
                <Box className="project-sub-image" w="50%" p="30px" borderRadius={"10px"} boxShadow={"-5px -5px 15px #D1D9E6, 5px 5px 15px #ffffff"} _hover={{ bg: "linear-gradient(245deg, #e2e8ec, #ffffff", transition: "background .3s ease-in-out" }} bg="linear-gradient(145deg, #e2e8ec, #ffffff" >
                  <Box id="p4" borderRadius={"12px"} bgRepeat="no-repeat" bgPosition={"center center"} bgSize="cover" w="100%" h="100%"  >
                    <Box w="100%" h="100%" borderRadius={"12px"} _hover={{ border: "1.5px solid #eaeaea", background: "none", cursor: "pointer", transition: "background .3s ease-in-out", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} bg={"#3d3e4137"} >
                    </Box>
                  </Box>
                </Box>


              </Flex>
              <Flex className="project-card" boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} borderRadius={"10px"}  >

                <Box className="project-sub-image" w="50%" p="30px" borderRadius={"10px"} boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} _hover={{ bg: "linear-gradient(245deg, #e2e8ec, #ffffff", transition: "background .3s ease-in-out" }} bg="linear-gradient(145deg, #e2e8ec, #ffffff" >
                  <Box id="p3" borderRadius={"12px"} bgRepeat="no-repeat" bgPosition={"center center"} bgSize="cover" w="100%" h="100%"  >
                    <Box w="100%" h="100%" borderRadius={"12px"} _hover={{ border: "1.5px solid #eaeaea", background: "none", cursor: "pointer", transition: "background .3s ease-in-out", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} bg={"#3d3e4137"} >
                    </Box>
                  </Box>
                </Box>
                <Box className="project-sub-des"  >
                  <Box>ANIMAL-LOVERS</Box>
                  <Box fontSize={"26px"} >tINDOG.COM</Box>
                  <Box as="p" lineHeight={"2"} m="20px 0" fontSize="17px" textAlign={"justify"}  >It's a simple web page for dogs. It is a Startup landing page for a fictional application named TinDog. TinDog allows the user to find other dogs & their owners nearby in the swipe left/right style made famous by Tinder. Want a pet, Tindog website helps makes your journey easy.</Box>
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

              </Flex> */}
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* <Box className="project-card" border={"1px solid black"} >
          <Box className="project-sub-card">
            <Box className="project-sub-image" id="p2">
             
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
        </Box> */}
        {/* <Box className="project-card">
            <Box className="project-sub-card">
              <Box className="project-sub-image" id="p1">
               
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
          </Box> */}
      </Flex>

    </Flex>
  );
};

export default Projects;
