import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const Days = (props) => {
  let numbers = null;
  const selectDays = (m) => {
    numbers = Array.from({ length: m }, (_, index) => index + 1);
  };
  if (props.monthNumber <= 6) {
    selectDays(31);
  } else if (props.monthNumber <= 11 && props.monthNumber >= 7) {
    selectDays(30);
  } else {
    selectDays(29);
  }
  return (
    <Box p={8} w={"100%"}>
      <Grid
        color="white"
        gap={3}
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(7, 1fr)"
        w={"100%"}
        dir="rtl"
      >
        {numbers.map((number, index) => {
          return (
            <GridItem
              key={index}
              w={9}
              h={9}
              gap={1}
              bg={"#1E222B"}
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDir={"row"}
              fontSize={16}
              fontWeight="bold"
            >
              {number}
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Days;

// import React, { useState } from "react";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { Calendar } from "react-modern-calendar-datepicker";

// const App = () => {
//   const [selectedDay, setSelectedDay] = useState(null);
//   return (
//     <Calendar
//       value={selectedDay}
//       onChange={setSelectedDay}
//       shouldHighlightWeekends
//       locale="fa" // add this
//     />
//   );
// };

// export default App;
