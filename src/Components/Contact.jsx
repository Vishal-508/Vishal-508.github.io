import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Flex className="contact-section">
      <Box position="relative" w="10%">
        <Box className="label">Contact</Box>
      </Box>
      <Flex className="contact-details"  >
        <Box textAlign="left" w="535px" h="434px" >
          <Text fontSize="5xl" fontWeight="bold"  color="white" > <Box color="#E699B8"  >Madhya Pradesh </Box>, INDIA</Text>
          <Text fontSize="2xl" mt="30px" mb="50px" color="#BFBFBF" >Sethi nagar, Ujjain</Text>
          <Text color="white" fontSize="2xl" >vishalsharma331441@gmail.com</Text>
          <Text color="white"  fontSize="2xl" >+91- 9039331441</Text>{" "}
        </Box>
        <Box w="535px" h="434px"  >
           <form >
            <input  type="text" placeholder="Name" />
            <input  type="text" placeholder="Email" padding="35px 0" />
            <input  type="text" placeholder="Subject" />
            <br />
            <textarea  name="" id="" cols="54" rows="10" placeholder="Message"></textarea>
            <button type="submit" >Contact Me</button>
          </form> </Box>
      </Flex>
    </Flex>
  );
}

export default Contact;
