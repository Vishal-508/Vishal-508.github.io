import { Box, Button, Flex, Spacer,Image } from '@chakra-ui/react'
import React from 'react';
import "../styles/projects.css";

const ProjectCard = ({ image, project_type, name, tech_stacks, discription, code_link, live_link }) => {
    return (
        <Flex className="project-card" boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} borderRadius={"10px"} wrap={{lg:"nowrap", md:"wrap", sm:"wrap",base:"wrap"}}  >

            <Box className="project-sub-image" w={{lg:"50%",md:"100%",sm:"100%",base:"100%"}}   p="30px" borderRadius={"10px"} boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} _hover={{ bg: "linear-gradient(245deg, #e2e8ec, #ffffff", transition: "background .3s ease-in-out" }} bg="linear-gradient(145deg, #e2e8ec, #ffffff" >
                <Box
                //  backgroundImage={`url(${image})`} borderRadius={"12px"} bgRepeat="no-repeat" bgPosition={"center center"} bgSize="cover" w="100%" h="100%"
                _hover={{ border: "1.5px solid #eaeaea", background: "none", cursor: "pointer", transition: "background .3s ease-in-out", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} 
                  >
                    <Flex justify={"center"} align="center" w="100%"  borderRadius={"12px"} x bg={"#3d3e4137"} >
                       <Image w="100%" borderRadius={"12px"} src={image } />
                    </Flex>
                </Box>
            </Box>
            <Box className="project-sub-des" w={{lg:"50%",md:"100%",sm:"100%",base:"100%"}} >
                <Box>{project_type}</Box>
                <Box className='project-title' fontSize={"26px"} >{name} </Box>
                <Box className='project-description' as="p" lineHeight={"2"} m="20px 0" fontSize="17px" textAlign={"justify"}  >{discription}</Box>
                <Flex  className="project-tech-stack tech-stacks">
                    {tech_stacks.map((item) => <Box>{item}</Box>)}
                </Flex>
                <Flex className="project-card-btn">
                    <Button><a target="_blank" className='project-github-link' href={code_link}> VIEW CODE</a></Button>
                    <Spacer />
                    <Button><a className='project-deployed-link' target="_blank" href={live_link}> LIVE PROJECT</a></Button>
                </Flex>
            </Box>

        </Flex>
    )
}

export default ProjectCard