import { Flex } from "@chakra-ui/react";
import React from "react";

const Timer = ({ show }) => {
  return <Flex display={show ? "flex" : "none"}>Timer</Flex>;
};

export default Timer;
// react-countdown
// react-countdown-now
// react-timer-hook
// structure =>
// <HStack>
//   <PinInput defaultValue="234">
//     <PinInputField />
//     <PinInputField />
//     <PinInputField />
//   </PinInput>
// </HStack>;
