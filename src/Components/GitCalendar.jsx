import { Box,Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
const GitCalendar = () => {
    const color=useColorModeValue("#E699B8","#BC2F67")
  return (
    <Box >
        <Text>DAYS I CODE</Text>
        <GitHubCalendar 
  username="Vishal-508" 
//   transformData={selectLastHalfYear} 
showWeekdayLabels
color={color}
   
  hideColorLegend
/>
        
       
    </Box>
  )
}

export default GitCalendar