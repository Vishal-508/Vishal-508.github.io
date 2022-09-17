import { Box, Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import "../styles/techsection.css"
const TechSection = () => {
  return (
    <Flex className='tech-section'  >
    <Box position="relative" w="10%">
        <Box className="label">My-skills</Box>
      </Box>
      <Flex w="100%" align="center">
        <Box w="90%"  h="70vh"mr="10%" >
        <Grid></Grid>
        </Box>
      </Flex>
    </Flex>
  )
}

export default TechSection

