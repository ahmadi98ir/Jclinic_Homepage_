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
import React, { useContext, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { AiOutlineCheck } from "react-icons/ai";
// import EditContext from "../../context/edit-context";

const Todo = (props) => {
  const [value, setValue] = useState("");
  // const editcontext = useContext(EditContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex
        py={6}
        h={{ base: "400px", xl: "700px" }}
        w={"100%"}
        direction={"column"}
        justifyContent={"start"}
        // filter={"auto"}
        // blur={"3px"}
      >
        {/*  */}
        <Flex justifyContent={"center"} paddingX={4}>
         {/*  <Button
            fontSize={14}
            minW={8}
            height={"auto"}
            borderRadius={10}
            padding={0}
            margin={0}
            color={"#E8ECFD"}
            bg={"#1C1F2B"}
          >
            <IoMdEyeOff />
            <Text display={"none"}>مخفی کن</Text>
          </Button> */}
          <FormLabel fontSize={18} color={"#E8ECFD"} fontWeight={"bold"}>
              پیام ها
          </FormLabel>
        </Flex>
        {/*  */}
        <Box w={"100%"} bg={"#eef0f512"} h={0.1} my={4}></Box>
        <Box overflow={"auto"}>{props.children}</Box>

        
      </Flex>
    </form>
  );
};

export default Todo;
