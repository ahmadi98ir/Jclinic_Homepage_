import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useState } from "react";

const Weather = ({ pishbiniClickHandler, pishbini }) => {
  const [temp, setTemp] = useState({
    temp: null,
    maxTemp: null,
    minTemp: null,
  });

  const APIKey = "c42c5f0c9b3b2fd8095f2882a3da19d4";
  const city = "ahvaz";

  // it's will run for one time
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTemp({
          temp: json.main.temp,
          maxTemp: json.main.temp_max,
          minTemp: json.main.temp_min,
        });
      });
  }, []);

  return (
    <Flex
      flex={1}
      direction={"column"}
      paddingY={4}
      paddingX={3}
      justifyContent={"space-around"}
      alignItems={"center"}
      borderRight={{ base: "1px solid #ffffffff", lg: "none" }}
      w={"50%"}
    >
      <Heading mx={"auto"}>
        <Flex>
          <Box>🌱</Box>
          <Box color={"#E8ECFD"}>{Math.floor(temp.temp)}°</Box>
        </Flex>
      </Heading>

      <Flex justifyContent={"center"} alignItems={"center"}>
       
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        fontSize={13}
        gap={2}
        color={"#747785"}
        mt={4}
      >
        <Flex>
          <Text>حداقل</Text>
          <Text color={"gray.400"} fontWeight={"bold"} ml={2}>
            {temp.minTemp}°
          </Text>
        </Flex>
        <Flex>
          <Text> حداکثر</Text>
          <Text color={"gray.400"} fontWeight={"bold"} ml={2}>
            {temp.maxTemp}°
          </Text>
        </Flex>
      </Flex>
      <Button
        h={8}
        bg={pishbini ? "#3D518F" : "inherit"}
        border={pishbini ? "none" : "1px solid #3D404D"}
        borderRadius={18}
        color={pishbini ? "#fff" : "#747785"}
        fontSize={12}
        padding={0}
        px={3}
        _hover={{
          border: `${pishbini ? `1px solid #747785` : `1px solid #3D404D`}`,
        }}
        _focus={{ outline: "none" }}
        onClick={pishbiniClickHandler}
      >
        {pishbini ? <IoIosArrowUp /> : <IoIosArrowDown />}
        پیش بینی
      </Button>
    </Flex>
  );
};

export default Weather;
