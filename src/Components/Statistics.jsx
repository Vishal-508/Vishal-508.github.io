import {
  background,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import "../styles/statistics.css";
import GitCalendar from "./GitCalendar";
import Stats from "./stats";

const Statistics = () => {
  return (
    <Flex className="static-section">
      <Box className="sub-header">
        <span>Numbers Doesn't Lie </span>
        <h2>My Statistics</h2>
      </Box>
      <Center className="static-main-con">
        <Flex className="static-cards-con">
          <Box className="static-card">
            <Flex className="static-img" id="bg6">
              <Center>1200+</Center>
            </Flex>
            <Box className="static-card-dis">
              HOURS{" "}
              <Box as="span" className="static-card-dis-span">
                of coding.
              </Box>
            </Box>
          </Box>
          <Box className="static-card">
            <Flex className="static-img" id="bg6">
              <Center>400+</Center>
            </Flex>
            <Box className="static-card-dis">DSA<Box as="span" className="static-card-dis-span">
                problems solved.
              </Box></Box>
          </Box>
          <Box className="static-card">
            <Flex className="static-img" id="bg6">
              <Center>200+</Center>
            </Flex>
            <Box className="static-card-dis">GIT<Box as="span" className="static-card-dis-span">are 
                commits till now.
              </Box></Box>
          </Box>
          <Box className="static-card">
            <Flex className="static-img" id="bg6">
              <Center>12+</Center>
            </Flex>
            <Box className="static-card-dis">Projects<Box as="span" className="static-card-dis-span">
                 are Done.
              </Box></Box>
          </Box>
          <Box className="static-card">
            <Flex className="static-img" id="bg6">
              <Center>100+</Center>
            </Flex>
            <Box className="static-card-dis">Hours<Box as="span" className="static-card-dis-span">
                of soft skills.
              </Box></Box>
          </Box>
        </Flex>
        <Center id="git-con"  className="git-calendar react-activity-calendar" >
          <GitCalendar />
        </Center>
        <Center mt="20px" id="sts-con" >
          <Stats />
        </Center>
      </Center>
    </Flex>
  );
};

export default Statistics;

// {/* <Flex className="static-sub-con"> */}
// <Flex
//   w="80%"

//   m="auto"
//   justify="space-between"
//   alignItems="center"
// >

//     <Flex
//       className="static-cards"
//       w="240px"
//       h="240px"
//       p="40px 40px 10px 40px"
//     >
//       <Box className="static-value">1200+</Box>
//       <Box className="static-line"></Box>
//       <Box className="static-dis">
//         <Box
//           as="span"
//           fontSize="18px"
//           fontWeight="bold"

//           color="#F9004D"
//         >
//           Hours{" "}
//         </Box>{" "}
//         of Coding.
//       </Box>
//     </Flex>

//     <Flex className="static-cards">
//       <Box className="static-value">400+</Box>
//       <Box className="static-line"></Box>
//       <Box
//         className="static-dis"

//       >
//         <Box
//           as="span"
//           fontSize="18px"
//           fontWeight="bold"

//           color="#F9004D"
//         >
//           DSA{" "}
//         </Box>{" "}
//         problems solved.
//       </Box>
//     </Flex>

//     <Flex className="static-cards">
//       <Box className="static-value">200+</Box>
//       <Box className="static-line"></Box>
//       <Box className="static-dis">
//         <Box
//           as="span"
//           fontSize="18px"
//           fontWeight="bold"

//           color="#F9004D"
//         >
//           Git{" "}
//         </Box>{" "}
//         Commits.
//       </Box>
//     </Flex>

//     <Flex className="static-cards">
//       <Box className="static-value">12+</Box>
//       <Box className="static-line"></Box>
//       <Box className="static-dis">
//         <Box
//           as="span"
//           fontSize="18px"
//           fontWeight="bold"

//           color="#F9004D"
//         >
//           Projects{" "}
//         </Box>{" "}
//         Done.
//       </Box>
//     </Flex>

//     <Flex className="static-cards">
//       <Box className="static-value">100+</Box>
//       <Box className="static-line"></Box>
//       <Box className="static-dis">
//         <Box
//           as="span"
//           fontSize="18px"
//           fontWeight="bold"

//           color="#F9004D"
//         >
//           Hours{" "}
//         </Box>{" "}
//         of Soft Skills.
//       </Box>
//     </Flex>

// </Flex>
// <Flex
//   className="git-container"
//   justify="center"
//   align="center"
//   h="50%"
//   w="100%"
// >
//   <GitCalendar />
// </Flex>
// </Flex>
