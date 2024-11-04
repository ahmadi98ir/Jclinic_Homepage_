import { Box } from "@chakra-ui/react";
import React from "react";
const BackDrop = ({ show, toggle }) => {
  return (
    <Box
      display={show ? "flex" : "none"}
      onClick={toggle}
      bg={"#0000004d"}
      pos={"absolute"}
      top={0}
      left={0}
      w={"100%"}
      h={"100%"}
      zIndex={12}
    ></Box>
  );
};

export default BackDrop;
