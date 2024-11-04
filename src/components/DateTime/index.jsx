import moment from "jalali-moment";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import { gregorianToHijri } from "../../utils/moment";
import { toPersianDigit } from "../../utils/toPersianDigit";

export default function DateTime({
  timerClickHandler,
  oghatClickHandler,
  oghat,
  timer,
}) {
  return (
    <Flex
      p={3}
      w="50%"
      flex={1}
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Heading
        as="h5"
        w="full"
        color="blue.500"
        fontWeight="bold"
        textAlign="center"
      >
        {toPersianDigit(moment().format("HH:mm"))}
      </Heading>

      <Text my={3} fontWeight="bold" fontSize={14} color={"#E8ECFD"}>
        {toPersianDigit(moment().locale("fa").format("dddd، DD MMMM"))}
      </Text>

      <Flex
        gap={2}
        color="#747785"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize={10}>
          {toPersianDigit(moment().format("YYYY/MM/DD"))}
        </Text>
        <Divider orientation="vertical" h="50%" rounded="full" opacity={0.5} />
        <Text fontSize={10}>
          {toPersianDigit(gregorianToHijri(new Date()))}
        </Text>
      </Flex>
      {/* وسط بودن المان ها را به هم میریزد */}
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Button
          leftIcon={oghat ? <IoIosArrowUp /> : <IoIosArrowDown />}
          colorScheme="blue"
          variant="outline"
          rounded="full"
          fontSize={10}
          size="xs"
          px={1}
          border="1px solid #3D404D"
          _hover={{
            border: oghat ? "1px solid #747785" : "1px solid #3D404D",
          }}
          color={oghat ? "#fff" : "#747785"}
          _focus={{ outline: "none" }}
          onClick={oghatClickHandler}
        >
          اوقات شرعی
        </Button>

        <Button
          leftIcon={timer ? <IoIosArrowUp /> : <IoIosArrowDown />}
          colorScheme="blue"
          variant="outline"
          rounded="full"
          size="xs"
          px={1}
          fontSize={10}
          border="1px solid #3D404D"
          _hover={{
            border: timer ? "1px solid #747785" : "1px solid #3D404D",
          }}
          color={timer ? "#fff" : "#747785"}
          _focus={{ outline: "none" }}
          onClick={timerClickHandler}
        >
          تایمر
        </Button>
      </Flex>
    </Flex>
  );
}
