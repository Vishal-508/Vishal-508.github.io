import { background, Box, Flex } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import "../App.css";
const Stats = () => {
  return (
    // streak
    <Flex direction="row" flexWrap="wrap" justify="center" >

        
    
         <Flex align="center" borderRadius="25px" boxShadow="5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff" bg={"linear-gradient(145deg, #e2e8ec, #ffffff)"}
         m="10px"
         >
      <div
    //    style={{ width: "80%", margin: "auto", background:"none" }}
       >
        <a href="https://github.com/vishal-508">
          <img
            align="left"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=Vishal-508&border_radius=25&background=FFFFFF00&fire=F9004D&ring=F9004D&hide_border=true"
          />
          {/* https://github-readme-streak-stats.herokuapp.com?user=Vishal-508&hide_border=true&background=FFFFFF00 */}
        </a>
      </div>
      </Flex>
      <Box 
        style={{
        //   width: "80%",
        //   height: "300px",
        //   display: "flex",
          margin: "10px",

          
    
        }}
        boxShadow= "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"
        borderRadius="25px"
      >
        {/* <a href="https://github.com/vishal-508">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=saurabh0413" //launguages
          />
        </a> */}
        <a href="https://github.com/vishal-508">
          <img
            align="left"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=vishal-508&count_private=true&show_icons=true&border_radius=25&bg_color=145deg,e9eff3,ffffff&title_color=F9004D&icon_color=F9004D&hide_border=true" //stats
          />
        </a>
      </Box>
    
    </Flex>
  );
};

export default Stats;
