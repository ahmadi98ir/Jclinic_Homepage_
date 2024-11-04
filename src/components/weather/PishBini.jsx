import { Flex } from "@chakra-ui/react";
import React from "react";

const PishBini = ({ show }) => {
  return <Flex display={show ? "flex" : "none"}>PishBini</Flex>;
};

export default PishBini;
