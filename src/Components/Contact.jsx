import { Box, Flex, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import "../styles/contact.css";
import icn1 from "../images/social11.png";
import icn2 from "../images/social22.png";
import icn3 from "../images/social33.png";
import { Link } from "react-scroll";
const Contact = () => {
  return (
    <Flex className="contact-section">
      <Box className="sub-header">
        <span>more</span>
        <h2>About Me</h2>
      </Box>
      <Flex className="contact-details">
        <Box textAlign="left" w="535px" h="434px">
          <Text fontSize="5xl" fontWeight="bold" color="#1E2125">
            {" "}
            <Box color="#ff014f">Madhya Pradesh </Box>, INDIA
          </Text>
          <Text fontSize="2xl" mt="30px" mb="50px" color="#878E99">
            Sethi nagar, Ujjain
          </Text>
          <Text color="#878E99" fontSize="2xl">
            vishalsharma331441@gmail.com
          </Text>
          <Text color="#878E99" fontSize="2xl">
            +91- 9039331441
          </Text>{" "}
          <Flex className="contact-icon-con">
            <Center>
              {" "}
              <a href="https://github.com/Vishal-508">
                <Image src={icn1} alt="github" />
              </a>{" "}
            </Center>
            <Center>
              {" "}
              <Link>
                <Image src={icn2} alt="instagram" />
              </Link>{" "}
            </Center>
            <Center>
              {" "}
              <a href="linkedin.com/in/vishal-sharma-388956218">
                <Image src={icn3} alt="linkedin" />
              </a>{" "}
            </Center>
          </Flex>
        </Box>
        <Box w="535px" h="434px">
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" padding="35px 0" />
            <input type="text" placeholder="Subject" />
            <br />
            <textarea
              name=""
              id=""
              cols="54"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="contact-btn" type="submit">
              Contact Me
            </button>
          </form>{" "}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
