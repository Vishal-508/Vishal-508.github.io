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
        <span>Get in touch</span>
        <h2>Contact Me</h2>
      </Box>
      <Flex className="contact-details">
        <Box textAlign="left" className="contact-dis">
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
              <a target="_blank" href="https://github.com/Vishal-508">
                <Image src={icn1} alt="github" />
              </a>{" "}
              
            </Center>
            <Center>
              {" "}
              <a
                target="_blank"
                href="https://www.instagram.com/vishal_sharma1020/"
              >
                <Image src={icn2} alt="Instagram" />
              </a>{" "}
            </Center>
            <Center>
              {" "}
              <a
                target="_blank"
                href="https://linkedin.com/in/vishal-sharma-388956218"
              >
                <Image src={icn3} alt="linkedin" />
              </a>{" "}
            </Center>
          </Flex>
        </Box>
        <Box className="contact-form-container">
          <form>
            <div className="form-name-email">
            <input type="text" placeholder="Name" />
            <div className="spacer-div" ></div>
            <input type="text" placeholder="Email"/>
            </div>
            <input type="text" placeholder="Subject" id="subject" />
            <br />
            <textarea
              name=""
              id="textarea"
              // cols="54"
              // rows="10"
              
              placeholder="Message"
            ></textarea>
            <button className="contact-btn" type="submit">
              Contact Me
            </button>
          </form>{" "}
        </Box>
      </Flex>
      <Center mt="160px">
        Made with ❤ in &nbsp;{" "}
        <Box color="#FF014F" fontWeight="bold">
          {" "}
          India.{" "}
        </Box>{" "}
      </Center>
    </Flex>
  );
};

export default Contact;
