import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import "../styles/projects.css"
const Projects = () => {
  return (
    <Flex className='project-section'  >
      <Box position="relative" w="10%">
        <Box className="label">Projects</Box>
      </Box>
    </Flex>
  )
}

export default Projects