import React from 'react'
import "../App.css"
import "../styles/hero.css"
import hero from"../images/vishal-hero-image.jpg"
import hero2 from"../images/hero2.png"
import hero3 from"../images/hero3.png"
import { Box, Flex,Text,Image } from '@chakra-ui/react'
const Hero = () => {
  return (
    <Flex className='hero-section' fontFamily= 'Montserrat' fontWeight="bold" color="white" >
       <Flex  w="50%" direction="column" justify="center" align="flex-end" >
       <Text alignItems="left" fontSize={{ base: '32px', md: '66px', lg: '80px' }} >Hi, I'm <Box className='' as='span' color="#BC2F67" > Vishal Sharma</Box></Text>
       <Text fontSize={{ base: '32px', md: '46pxpx', lg: '66px' }}> a Full Stack Developer.</Text>
       <Box>
        <Box></Box>
        <Box></Box>
       </Box>
       </Flex>
        <Box className='hero-image' position="relative" >
        <Image src={hero2} alt="Vishal" position="absolute" bottom="0" />
        </Box>
    </Flex>
       
    
  )
}

export default Hero