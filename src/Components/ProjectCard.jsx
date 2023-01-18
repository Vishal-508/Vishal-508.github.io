import { Box, Button, Flex, Spacer,Image } from '@chakra-ui/react'
import React from 'react';
import "../styles/projects.css";

const ProjectCard = ({ image, project_type, name, tech_stacks, discription, code_link, live_link }) => {
    return (
        <Flex className="project-card" boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} borderRadius={"10px"} wrap={{lg:"nowrap", md:"wrap", sm:"wrap",base:"wrap"}}  >

            <Box className="project-sub-image" w={{lg:"40%",md:"100%",sm:"100%",base:"100%"}}   p="30px" borderRadius={"10px"} boxShadow={"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"} _hover={{ bg: "linear-gradient(245deg, #e2e8ec, #ffffff", transition: "background .3s ease-in-out" }} bg="linear-gradient(145deg, #e2e8ec, #ffffff" >
                <Box
                //  backgroundImage={`url(${image})`} borderRadius={"12px"} bgRepeat="no-repeat" bgPosition={"center center"} bgSize="cover" w="100%" h="100%"
                _hover={{ borderRadius:"12px", background: "none", cursor: "pointer", transition: "background .3s ease-in-out", boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} 
                  >
                    <Flex justify={"center"} align="center" w="100%"  borderRadius={"12px"} x bg={"#3d3e4137"} >
                       <Image w="100%" borderRadius={"12px"} src={image } />
                    </Flex>
                </Box>
            </Box>
            <Box className="project-sub-des" w={{lg:"60%",md:"100%",sm:"100%",base:"100%"}} >
                <Box>{project_type}</Box>
                <Box fontSize={"26px"} >{name} </Box>
                <Box as="p" lineHeight={"2"} m="20px 0" fontSize="17px" textAlign={"justify"}  >{discription}</Box>
                <Flex className="tech-stacks" >
                    {tech_stacks.map((item) => <Box class="single_stack" _hover={{border:".2px solid #F9004D",cursor:"pointer", transition:"color .3s ease-in-out", boxShadow:"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" }} transform={"skew(-15deg)"} p={{lg:"8px 8px",md:"8px 8px",sm:"8px 8px",base:"6px 6px"}} fontSize={{lg:"14px",md:"14px",sm:"12px",base:"10px"}} m={{lg:"8px 8px",md:"8px 8px",sm:"8px 8px",base:"5px 5px"}} color={"#F9004D"} borderRadius="5px" border={".2px solid #878E99"} background={"linear-gradient(145deg, #e2e8ec, #ffffff)"} >{item} </Box>)}
                </Flex>
                <Flex align={"center"} className="project-card-btn" flexWrap={"wrap"} textAlign="center" justify={{lg:"space-between",md:"space-between",sm:"space-between",base:"space-between"}} direction={{lg:"row",md:"row",sm:"row",base:"column"}} w="100%"  >

                    <Button w={{lg:"auto",md:"auto",sm:"auto",base:"100%"}} m={{lg:"auto",md:"auto",sm:"auto",base:"0 0 10px 0"}} ><a target="_blank" href={code_link}> VIEW CODE</a></Button>
                    <Spacer />
                    <Button w={{lg:"auto",md:"auto",sm:"auto",base:"100%"}} ><a target="_blank" href={live_link}> LIVE PROJECT</a></Button>
                </Flex>
            </Box>

        </Flex>
    )
}

export default ProjectCard