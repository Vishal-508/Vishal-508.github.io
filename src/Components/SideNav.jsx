import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Image,
  useDisclosure,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
// import menu from "../images/menu.png";
import ham1 from "../images/h1n.png";
import ham2 from "../images/h1n.png";
import "../styles/SideNav.css";
function SideNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  // useEffect(()=>{
  //   handleClose()
  // },[handleClose])
  return (
    // #F0F2F5
    <Box>
      <Button
        ref={btnRef}
        onClick={onOpen}
        className="ham-button"
        _hover={{ bg: "#FF014F"}}
      >
        <Image src={ ham1} alt="hamburger-icon" m="0" p="0" w="30px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        background="#F0F2F5"
      >
        <DrawerOverlay />
        <DrawerContent background="#F0F2F5">
          <DrawerCloseButton />
          <DrawerHeader color="#FF014F"></DrawerHeader>

          <DrawerBody>
            <List
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="space-evenly"
              w="100%"
            >
              <a href="#home-sec" onClick={handleClose} className="side-items">
                {/* w="100%" padding="20px" m="auto" textAlign="center"  */}
                <ListItem>Home</ListItem>
              </a>

              <a className="side-items" href="#about-sec" onClick={handleClose}>
                <ListItem>About</ListItem>
              </a>

              <a className="side-items" href="#skills-sec" onClick={handleClose}>
                <ListItem>Skills</ListItem>
              </a>
              <a href="#projects-sec" onClick={handleClose} className="side-items">
                <ListItem>Projects</ListItem>
              </a>
              <a
                href="#statistics-sec"
                onClick={handleClose}
                className="side-items"
              >
                <ListItem>Statistics</ListItem>
              </a>
              <a href="#contact-sec" onClick={handleClose} className="side-items">
                <ListItem>Contact</ListItem>
              </a>
            </List>
          </DrawerBody>

          {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default SideNav;
