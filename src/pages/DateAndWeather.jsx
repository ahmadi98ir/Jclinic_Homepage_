import { Flex, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DastyarEvent from "../components/dastyar-event/DastyarEvent";
import Weather from "../components/weather/Weather";
import DateTime from "../components/DateTime";

const DateAndWeather = () => {
  const [relation, setRelation] = useState({
    text1: null,
    text2: null,
    holiday: false,
  });

  const [showDown, setShowDown] = useState({
    dastEvents: true,
    timer: false,
    oghatsharye: false,
    pishbini: false,
  });

  // Request for API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.keybit.ir/time/");
        if (response.ok) {
          const result = await response.json();
          setRelation({
            text1: result.date.day.events.global ? result.date.day.events.global.text : null,
            text2: result.date.day.events.local ? result.date.day.events.local.text : null,
            holiday: result.date.day.events.local ? result.date.day.events.local.holiday : null,
          });
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Repeat request
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <GridItem
      rowSpan={1}
      colSpan={1}
      w={"100%"}
      h={"100%"}
      alignContent={"end"}
      bg={"rgb(19 ,21 ,28)"}
      borderRadius={25}
      area={"time"}
      marginBottom={-4}  // تنظیم فاصله منفی از پایین
    >
      <Flex
        direction={{ base: "column", lg: "row", xl: "column" }}
        h={"100%"}
        maxW={"100%"}
      >
        <Flex
          flex={1}
          direction={"row"}
          borderBottom={{ base: "1px solid #eef0f512", lg: "0" }}
          maxW={"100%"}
          h={"100%"}
        >
          <Weather />
          <DateTime />
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default DateAndWeather;
