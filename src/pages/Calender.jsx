import { GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <GridItem
      // rowSpan={8}
      // colSpan={3}
      w={"100%"}
      h={"100%"}
      bg={"#13151C"}
      borderRadius={25}
      area={"calender"}
    >
      <Calendar
        locale={"fa"}
        value={selectedDay}
        onChange={setSelectedDay}
        calendarClassName="custom-calendar"
        shouldHighlightWeekends
      />
    </GridItem>
  );
};

export default Calender;
