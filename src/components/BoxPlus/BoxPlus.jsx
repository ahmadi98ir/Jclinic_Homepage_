import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { LuFolderPlus } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { useBoolean } from "@chakra-ui/react";

const BoxPlus = ({ icon, text, isActive, onClick }) => {
  const [show, setShow] = useBoolean(!isActive);
  return (
    <Flex
      bg={"#1A1D26"}
      borderRadius={8}
      color={"#BABDC6"}
      p={0}
      m={0}
      overflow={"hidden"}
      w={"100%"}
      h="77px"
      cursor={"pointer"}
    >
      {/* first show */}
      <Flex
        display={!isActive ? "flex" : "none"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        w={"100%"}
        onClick={() => {
          setShow.toggle();
          // Notify the parent component that this BoxPlus was clicked
          onClick();
        }}
      >
        <Box fontWeight={"bold"} fontSize={50}>
          {icon}
        </Box>
        <Box fontWeight={"bold"} fontSize={18}>
          {text}
        </Box>
      </Flex>
      {/* second show */}
      <Flex
        display={isActive ? "flex" : "none"}
        flexDir="column"
        w={"100%"}
        justifyContent="center"
        alignItems="center"
        p={2}
        onClick={() => {
          setShow.toggle();
          // Notify the parent component that this BoxPlus was clicked
          onClick();
        }}
      >
        <Button
          w={"100%"}
          bg={"#1E222B"}
          color={"#BABDC6"}
          border={"none"}
          _hover={{ bg: "#2B2F3D" }}
          px={"auto"}
          borderRadius={10}
          mb={2}
        >
          <HStack spacing={2}>
            <Text>بوکمارک</Text>
            <FaRegStar />
          </HStack>
        </Button>
        <Button
          w={"100%"}
          bg={"#1E222B"}
          color={"#BABDC6"}
          borderRadius={10}
          border={"none"}
          _hover={{ bg: "#2B2F3D" }}
          outline={"none"}
        >
          <HStack spacing={2}>
            <Text>پوشه</Text>
            <LuFolderPlus />
          </HStack>
        </Button>
      </Flex>
    </Flex>
  );
};

export default BoxPlus;
