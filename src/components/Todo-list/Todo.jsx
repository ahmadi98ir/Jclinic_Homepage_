import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { PiArrowElbowDownLeftBold } from "react-icons/pi";

import React, { useState } from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [showDelete, setShowDelete] = useBoolean();
  const toast = useToast();
  const [show, setShow] = useState(false);
  return (
    <Flex
      mx={2}
      mb={3}
      borderRadius={14}
      border={"1px solid"}
      borderColor={"gray.600"}
      p={2}
      bg={"#eef0f512"}
      flexDir={"column"}
      gap={4}
      className={`${task.completed ? "completed" : ""}`}
      _hover={{
        ".todo-icon": {
          opacity: 1,
        },
      }}
    >
      <Flex
        dir="rtl"
        direction={"row-revrse"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
      >
        {/*  <Checkbox
          size="md"
          colorScheme="gray"
          flexDirection={"row-reverse"}
          gap={4}
          color={"#FFFFFF"}
          onChange={() => toggleComplete(task.id)}
        >
         
        </Checkbox> */}
        <Flex>{task.task}</Flex>
      </Flex>
      <Flex dir="rtl" maxHeight={show ? 'max-content' : '60px'} overflow={'hidden'} fontSize={'13px'} textAlign={'justify'}>{task.message}</Flex>
      <Flex dir="rtl" justify={'center'} marginTop={'-5px'} cursor={'pointer'} fontSize={'15px'} onClick={()=> setShow(!show)}>{show ? 'بستن' : 'مشاهده'}</Flex>
    </Flex>
  );
};

export default Todo;
// usage colorScheme we can add any color to checkbox
