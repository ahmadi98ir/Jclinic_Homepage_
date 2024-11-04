import { Box, Container } from "@chakra-ui/react";
import React from "react";

const BgLayout = (props) => {
  return (
    <Container
      h={"100%"}
      w={"100%"}
      // pos={"absolute"}
      // top={0}
      // left={0}
      bgColor={"#FFFFFF	"}
      maxW={"container.xl"}
      mx={"auto"}
    >
      {props.children}
    </Container>
  );
};

export default BgLayout;
