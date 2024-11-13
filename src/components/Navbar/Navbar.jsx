import { IoCloudDoneSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { Tooltip } from "@chakra-ui/react";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        my={4}
        mx={2}
      >
         
        <Flex gap={2} alignItems={"center"}>
          <img width={200} height={80} src="/logo.png" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
