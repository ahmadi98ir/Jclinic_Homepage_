import { Flex, Grid, GridItem, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import BoxPlus from "../BoxPlus/BoxPlus";
import { PiDotsNineBold } from "react-icons/pi";

const BookMark = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBoxPlusClick = (index) => {
    setActiveIndex(index);
  };
  // Create an array with the desired number of BoxPlus components
  const boxPlusComponents = Array.from({ length: 11 }, (_, index) => (
    <BoxPlus
      key={index}
      icon={<FaPlus fontSize={40} />}
      isActive={index === activeIndex}
      onClick={() => handleBoxPlusClick(index)}
    />
  ));
  const x = <BoxPlus icon={<PiDotsNineBold />} text={"دم دستی"} />;

  return (
    <GridItem area={"boxplus"} w={"100%"} flexWrap={"wrap"}>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        w={"100%"}
        flexWrap={"wrap"}
        dir="rtl"
        gap={10}
        // textAlign={"right"}
      >
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
          justify={"center"}
          align={"center"}
          fontSize={"15px"}
        >
          <Link
            justifyContent={"center"}
            justifyItems={"center"}
            href="https://www.jclinic.ir/"
            target="_blank"
          >
            <Flex marginX={'auto'} justify={'center'} justifyItems={'center'}>
              <img height={"30px"} width={"30px"} src="./logo-mini.png" />
            </Flex>
            <Flex marginTop={"15px"}>سایت درمانگاه</Flex>
          </Link>
        </Flex>
      </Grid>
    </GridItem>
  );
  return (
    <GridItem area={"boxplus"} w={"100%"} flexWrap={"wrap"}>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        w={"100%"}
        flexWrap={"wrap"}
        dir="rtl"
        gap={10}
        // textAlign={"right"}
      >
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
          justify={"center"}
          align={"center"}
          fontSize={"15px"}
        >
          <Link
            justifyContent={"center"}
            justifyItems={"center"}
            href="https://www.jclinic.ir/"
            target="_blank"
          >
            <Flex marginX={'auto'} justify={'center'} justifyItems={'center'}>
              <img height={"30px"} width={"30px"} src="./logo-mini.png" />
            </Flex>
            <Flex marginTop={"15px"}>سایت درمانگاه</Flex>
          </Link>
        </Flex>
      </Grid>
    </GridItem>
  );




};
// ...
export default BookMark;

// import { Flex, Grid, GridItem } from "@chakra-ui/react";
// import React from "react";
// import { FaPlus } from "react-icons/fa6";
// import BoxPlus from "../BoxPlus/BoxPlus";
// import { PiDotsNineBold } from "react-icons/pi";

// const BookMark = () => {
//   // Create an array with the desired number of BoxPlus components
//   const boxPlusComponents = Array.from({ length: 11 }, (_, index) => (
//     <BoxPlus key={index} icon={<FaPlus fontSize={40} />} />
//   ));
//   const x = <BoxPlus icon={<PiDotsNineBold />} text={"دم دستی"} />;
//   return (
//     <GridItem rowSpan={2}>
//       <Grid
//         templateColumns="repeat(6, 1fr)"
//         templateRows="repeat(2, 1fr)"
//         h="100%"
//         w={"100%"}
//         gap={4}
//         textAlign={"right"}
//       >
//         {boxPlusComponents}
//         {x}
//       </Grid>
//     </GridItem>
//   );
// };

// export default BookMark;
