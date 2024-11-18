import { Flex, Grid, GridItem, Link } from "@chakra-ui/react";
import React from "react";

const BookMark = () => {
  // اطلاعات باکس‌ها
  const boxData = [
    { href: "https://www.jclinic.ir/", text: "سایت درمانگاه", imgSrc: "./logo-mini.png" },
    { href: "https://ep.tamin.ir/", text: "تامین اجتماعی", imgSrc: "./logo-mini-Tamin.png" },
    { href: "https://eservices.ihio.gov.ir/sso/?sourceApp=https://eservices.ihio.gov.ir/ihioerx/", text: "بیمه سلامت", imgSrc: "./logo-mini-khadamat.png" },
    { href: "https://esakhad.esata.ir:9092/authentication/login", text: "بیمه نیروهای مسلح", imgSrc: "./logo-mini-sakhad.png" },
    { href: "https://www.example4.com/", text: " سامانه ماد", imgSrc: "./logo-mini-mad.png" },
    { href: "https://www.example5.com/", text: "خدمات پرسنلی", imgSrc: "./logo5logo-mini-mad.png" },
    { href: "https://www.example6.com/", text: "سایت 6", imgSrc: "./logo6.png" },
    { href: "https://www.example7.com/", text: "سایت 7", imgSrc: "./logo7.png" },
    { href: "https://www.example5.com/", text: "خدمات پرسنلی", imgSrc: "./logo5logo-mini-mad.png" },
    { href: "https://www.example6.com/", text: "سایت 6", imgSrc: "./logo6.png" },
    { href: "https://www.example7.com/", text: "سایت 7", imgSrc: "./logo7.png" }
  ];

  return (
    <GridItem area={"boxplus"} w={"100%"} flexWrap={"wrap"}>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
        w={"100%"}
        flexWrap={"wrap"}
        dir="rtl"
        gap={1}
      >
        {boxData.map((box, index) => (
          <Flex
            key={index}
            bg={"#1A1D26"}
            borderRadius={8}
            color={"#BABDC6"}
            p={0}
            m={0}
            overflow={"hidden"}
            w={"100%"}
            h="180px"
            cursor={"pointer"}
            justify={"center"}
            align={"center"}
            fontSize={"15px"}
          >
            <Link
              justifyContent={"center"}
              justifyItems={"center"}
              href={box.href}
              target="_blank"
            >
              <Flex height={"100px"} width={"100px"} marginX={'auto'} justify={'center'} justifyItems={'center'} background={'white'} borderRadius={'full'}>
                <img height={"100px"} width={"100px"} src={box.imgSrc} alt={box.text} style={{objectFit:'contain'}} />
              </Flex>
              <Flex marginTop={"15px"}>{box.text}</Flex>
            </Link>
          </Flex>
        ))}
      </Grid>
    </GridItem>
  );
};

export default BookMark;
