import { Box, Flex, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import "../styles/contact.css";
import icn1 from "../images/social11.png";
import icn2 from "../images/social22.png";
import icn3 from "../images/social33.png";
import { Link } from "react-scroll";
const Contact = () => {
  return (
    <Flex className="contact-section" id="contact">
      <Box className="sub-header">
        <span>Get in touch</span>
        <h2>Contact Me</h2>
      </Box>
      <Flex className="contact-details">
        <Box textAlign="left" className="contact-dis">
          <Text  fontSize={{lg:"5xl",md:"5xl",sm:"3xl",base:"2xl"}} fontWeight="bold" color="#1E2125">
            {" "}
            <Box color="#ff014f">Madhya Pradesh </Box>, INDIA
          </Text>
          <Text fontSize={{lg:"2xl",md:"2xl",sm:"2xl",base:"18px"}} mt="30px" mb={{lg:"50px",md:"50px",sm:"40px",base:"15px"}} color="#878E99">
            Sethi nagar, Ujjain
          </Text>
          <Text id="contact-email" color="#878E99" fontSize={{lg:"2xl",md:"2xl",sm:"2xl",base:"18px"}} >
            vishalsharma331441@gmail.com
          </Text>
          <Text id="contact-phone" color="#878E99" fontSize={{lg:"2xl",md:"2xl",sm:"2xl",base:"18px"}} >
            +91- 9039331441
          </Text>{" "}
          <Flex className="contact-icon-con">
            <Center>
              {" "}
              <a
              id="contact-github"
              target="_blank" href="https://github.com/Vishal-508">
                <Image src={icn1} alt="github" />
              </a>{" "}
              
            </Center>
            <Center>
              {" "}
              <a
              id="contact-intagram"
                target="_blank"
                href="https://www.instagram.com/vishal_sharma1020/"
              >
                <Image src={icn2} alt="Instagram" />
              </a>{" "}
            </Center>
            <Center>
              {" "}
              <a
              id="contact-linkedin"
                target="_blank"
                href="https://linkedin.com/in/vishal-sharma-388956218"
              >
                <Image src={icn3} alt="linkedin" />
              </a>{" "}
            </Center>
          </Flex>
        </Box>
        <Box id="f-con" className="contact-form-container">
          <form>
            <div className="form-name-email">
            <input type="text" placeholder="Name" />
            {/* <div className="spacer-div" ></div> */}
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
