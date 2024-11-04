import { Flex, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DastyarEvent from "../components/dastyar-event/DastyarEvent";
import Weather from "../components/weather/Weather";
import DateTime from "../components/DateTime";
import Timer from "../components/Timer/Timer";
import OghatSharei from "../components/oghatSharie/OghatSharei";
import PishBini from "../components/weather/PishBini";

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

  // request for Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.keybit.ir/time/");
        if (response.ok) {
          const result = await response.json();
          // console.log(result.date);
          setRelation({
            text1: result.date.day.events.global
              ? result.date.day.events.global.text
              : null,
            text2: result.date.day.events.local
              ? result.date.day.events.local.text
              : null,
            holiday: result.date.day.events.local
              ? result.date.day.events.local.holiday
              : null,
          });
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // repeat request
    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  });
  // toggles for showing  components for timer oghat sharye and pishbini
  const showTimerHandler = () => {
    setShowDown((prevstate) => ({
      dastEvents: !prevstate.timer ? false : !prevstate.dastEvents,
      timer: !prevstate.timer,
      oghatsharye: false,
      pishbini: false,
    }));
  };
  const showOghatHandler = () => {
    setShowDown((prevstate) => ({
      dastEvents: !prevstate.oghatsharye ? false : !prevstate.dastEvents,
      timer: false,
      oghatsharye: !prevstate.oghatsharye,
      pishbini: false,
    }));
  };
  const showPishbiniHandler = () => {
    setShowDown((prevstate) => ({
      dastEvents: !prevstate.pishbini ? false : !prevstate.dastEvents,
      timer: false,
      oghatsharye: false,
      pishbini: !prevstate.pishbini,
    }));
  };
  return (
    <GridItem
      // rowSpan={6}
      // colSpan={3}
      w={"100%"}
      h={"100%"}
      bg={"rgb(19 ,21 ,28)"}
      borderRadius={25}
      area={"time"}
      // zIndex={-1}
    >
      <Flex
        direction={{ base: "column", lg: "row", xl: "column" }}
        h={"100%"}
        maxW={"100%"}
      >
        <Flex
          flex={1}
          direction={"row"}
          borderBottom={{ base: "1px solid #eef0f512", lg: "none" }}
          maxW={"100%"}
          h={"50%"}
        >
          <Weather
            pishbiniClickHandler={showPishbiniHandler}
            pishbini={showDown.pishbini}
          />
          <DateTime
            timerClickHandler={showTimerHandler}
            oghatClickHandler={showOghatHandler}
            timer={showDown.timer}
            oghat={showDown.oghatsharye}
          />
        </Flex>
        <Flex flex={1} h={{ base: "50%", lg: "100%" }}>
          <DastyarEvent
            show={showDown.dastEvents}
            global={relation.text1}
            local={relation.text2}
            holiday={relation.holiday}
          />
          <Timer show={showDown.timer} />
          <OghatSharei show={showDown.oghatsharye} />
          <PishBini show={showDown.pishbini} />
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default DateAndWeather;
