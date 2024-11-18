import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { AiOutlineCheck } from "react-icons/ai";

const Todo = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        py={4}  // کاهش فضای عمودی
        w={"100%"}  // افزایش عرض به 100% صفحه
        minW={"300px"}  // تنظیم حداقل عرض
        direction={"column"}
        justifyContent={"start"}
      >
        <Flex justifyContent={"center"} paddingX={4}>
          <FormLabel fontSize={18} color={"#E8ECFD"} fontWeight={"bold"}>
            پیام ها
          </FormLabel>
        </Flex>
        
        <Box w={"100%"} bg={"#eef0f512"} h={0.1} my={4}></Box>
        <Box overflow={"auto"}>{props.children}</Box>
      </Flex>
    </form>
  );
};

export default Todo;
