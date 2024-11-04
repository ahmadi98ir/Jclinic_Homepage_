import {
  Box,
  Flex,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SlMagnifier } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { PiArrowElbowDownLeftBold } from "react-icons/pi";
import React from "react";

const SearchBox = ({ setShow, show }) => {
  return (
    <GridItem
      bg={"#13151C"}
      borderRadius={25}
      paddingX={5}
      paddingY={3}
      zIndex={11}
    >
      <Flex
        bg={"#1E222B"}
        borderRadius={35}
        p={1}
        // pos={"relative"}
      >
        <InputGroup>
          <InputLeftElement
            fontSize={24}
            bg={"rgb(61, 81, 143 )"}
            borderRadius={"9999px"}
            height={"80%"}
            w={show ? "90px" : "50px"}
            aspectRatio={1}
            // pos={"absolute"}
            // left={0}
            top={"10%"}
            transform={"translateX(10%)"}
            transition="width 0.3s ease"
          >
            {show ? (
              <Flex
                fontSize={12}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={2}
                color={"#FFFFFF"}
              >
                <Box
                  bg={"#5C6DA1"}
                  px={2}
                  py={1}
                  borderRadius={7}
                  fontSize={12}
                >
                  <PiArrowElbowDownLeftBold />
                </Box>
                <Text>جستجو</Text>
              </Flex>
            ) : (
              <Flex color={"#FFFFFF"} fontSize={14} fontWeight={"bold"}>
                <SlMagnifier />
              </Flex>
            )}
          </InputLeftElement>
          <Input
            placeholder={show ? "جستجو" : "جستجو در گوگل"}
            _placeholder={{
              color: "#A8ABBD",
              fontSize: "14px",
            }}
            variant={"unstyled"}
            borderRadius={"50px"}
            paddingRight={12}
            paddingLeft={90}
            paddingY={2}
            w={"100%"}
            textAlign="right"
            onClick={setShow}
          />

          <InputRightElement
            fontSize={24}
            borderRadius={"50%"}
            height={"80%"}
            aspectRatio={1}
            position={"absolute"}
            right={0}
            top={"10%"}
            transform={"translateX(-10%)"}
          >
            <FcGoogle />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </GridItem>
  );
};

export default SearchBox;
