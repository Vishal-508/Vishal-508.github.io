import { background, Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import "../styles/statistics.css";
import GitCalendar from "./GitCalendar";

const Statistics = () => {
  return (
    <Flex className="static-section">
      <Box position="relative" w="10%">
        <Box className="label">Statistics</Box>
      </Box>

      <Flex justify="center" align="center" w="100%">
        <Flex w="80%" direction="column" m="auto" justify="space-between" alignItems="center"  >
          <Flex h="50%"  w="100%" justify="space-between" m="80px 100px 60px 0px" >
            {/* <Flex w="240px" h="240px" className="static-cards"> */}
              {/* <Flex direction="column">
                <Flex h="80%">
                  <Box w="100%">1200+</Box>
                </Flex>
                <Box h="20%"> Hours </Box>
              </Flex> */}
              {/* </Flex> */}
              <Flex
                className="img-section"
                w="240px"
                h="240px"
                p="40px 40px 10px 40px"
              >
                <Box
                  w="100%"
                  alignSelf="center"
                  alignItems="center"
                  mb="20px"
                  fontSize="38px"
                  fontWeight="bold"
                  color="#E699B8"
                  padding="20px 10px"
                  background="#181a1d"
                  // boxShadow="inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225;"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                  borderRadius="15px"
                >
                  1200+
                </Box>
                <Box
                  border=".5px solid #181a1d"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                ></Box>
                <Box
                  alignSelf="center"
                  alignItems="center"
                  // mb="30px"
                  fontSize="12px"
                  color="white"
                  // fontWeight="bold"
                >
                  <Box
                    as="span"
                    fontSize="18px"
                    fontWeight="bold"
                    color="#E699B8"
                  >
                    Hours{" "}
                  </Box>{" "}
                  of Full Stack Coding.
                </Box>
              </Flex>

              <Flex
                className="img-section"
                w="240px"
                h="240px"
                p="40px 40px 10px 40px"
              >
                <Box
                  w="100%"
                  alignSelf="center"
                  alignItems="center"
                  mb="20px"
                  fontSize="38px"
                  fontWeight="bold"
                  color="#E699B8"
                  padding="20px 10px"
                  background="#181a1d"
                  // boxShadow="inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225;"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                  borderRadius="15px"
                >
                  400+
                </Box>
                <Box
                  border=".5px solid #181a1d"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                ></Box>
                <Box
                  alignSelf="center"
                  alignItems="center"
                  // mb="30px"
                  fontSize="12px"
                  color="white"
                  // fontWeight="bold"
                >
                  <Box
                    as="span"
                    fontSize="18px"
                    fontWeight="bold"
                    color="#E699B8"
                  >
                    DSA{" "}
                  </Box>{" "}
                  problems solved.
                </Box>
              </Flex>

              <Flex
                className="img-section"
                w="240px"
                h="240px"
                p="40px 40px 10px 40px"
              >
                <Box
                  w="100%"
                  alignSelf="center"
                  alignItems="center"
                  mb="20px"
                  fontSize="38px"
                  fontWeight="bold"
                  color="#E699B8"
                  padding="20px 10px"
                  background="#181a1d"
                  // boxShadow="inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225;"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                  borderRadius="15px"
                >
                  200+
                </Box>
                <Box
                  border=".5px solid #181a1d"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                ></Box>
                <Box
                  alignSelf="center"
                  alignItems="center"
                  // mb="30px"
                  fontSize="12px"
                  color="white"
                  // fontWeight="bold"
                >
                  <Box
                    as="span"
                    fontSize="18px"
                    fontWeight="bold"
                    color="#E699B8"
                  >
                    Git{" "}
                  </Box>{" "}
                  Commits.
                </Box>
              </Flex>

              <Flex
                className="img-section"
                w="240px"
                h="240px"
                p="40px 40px 10px 40px"
              >
                <Box
                  w="100%"
                  alignSelf="center"
                  alignItems="center"
                  mb="20px"
                  fontSize="38px"
                  fontWeight="bold"
                  color="#E699B8"
                  padding="20px 10px"
                  background="#181a1d"
                  // boxShadow="inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225;"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                  borderRadius="15px"
                >
                  12+
                </Box>
                <Box
                  border=".5px solid #181a1d"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                ></Box>
                <Box
                  alignSelf="center"
                  alignItems="center"
                  // mb="30px"
                  fontSize="12px"
                  color="white"
                  // fontWeight="bold"
                >
                  <Box
                    as="span"
                    fontSize="18px"
                    fontWeight="bold"
                    color="#E699B8"
                  >
                    Projects{" "}
                  </Box>{" "}
                  Done.
                </Box>
              </Flex>

              <Flex
                className="img-section"
                w="240px"
                h="240px"
                p="40px 40px 10px 40px"
              >
                <Box
                  w="100%"
                  alignSelf="center"
                  alignItems="center"
                  mb="20px"
                  fontSize="38px"
                  fontWeight="bold"
                  color="#E699B8"
                  padding="20px 10px"
                  background="#181a1d"
                  // boxShadow="inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225;"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                  borderRadius="15px"
                >
                  100+
                </Box>
                <Box
                  border=".5px solid #181a1d"
                  boxShadow="10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;"
                ></Box>
                <Box
                  alignSelf="center"
                  alignItems="center"
                  // mb="30px"
                  fontSize="12px"
                  color="white"
                  // fontWeight="bold"
                >
                  <Box
                    as="span"
                    fontSize="18px"
                    fontWeight="bold"
                    color="#E699B8"
                  >
                    Hours{" "}
                  </Box>{" "}
                  of Soft Skills.
                </Box>
              </Flex>
           
          </Flex>
          <Flex justify="center" align="center" h="50%" w="100%">
            <GitCalendar />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Statistics;
