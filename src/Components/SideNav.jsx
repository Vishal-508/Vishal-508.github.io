import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input,Image, useDisclosure, Box } from "@chakra-ui/react"
import React from "react";
import menu from "../images/menu.png"
import ham1 from "../images/h1.png"
function SideNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      < Box  >
        <Button  ref={btnRef} onClick={onOpen} _hover={{bg:"hsla(336,60%,75%,1)"}}  >
          <Image src={ham1} alt="hamburger-icon" m="0" p="0" w="30px"  />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
  export default SideNav;