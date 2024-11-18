import { Flex, Grid, GridItem, Link, Box } from "@chakra-ui/react";
import React from "react";

const BookMark = () => {
  // اطلاعات باکس‌ها
  const boxData = [
    { href: "https://www.jclinic.ir/", text: "سایت درمانگاه", imgSrc: "./logo-mini.png" },
    { href: "https://ep.tamin.ir/", text: "تامین اجتماعی", imgSrc: "./logo-mini-Tamin.png" },
    { href: "https://eservices.ihio.gov.ir/sso/?sourceApp=https://eservices.ihio.gov.ir/ihioerx/", text: "بیمه سلامت", imgSrc: "./logo-mini-khadamat.png" },
    { href: "https://esakhad.esata.ir:9092/authentication/login", text: "بیمه نیرو مسلح", imgSrc: "./logo-mini-sakhad.png" },
    { href: "http://192.168.1.70/MedalWeb/Login.aspx?url=Default.aspx/", text: " سامانه PACS ", imgSrc: "./logo-mini-pacs.png" },
    { href: "http://192.168.1.40/login", text: "وب کارت", imgSrc: "./logo-mini-webcard.png" },
    { href: "https://account.iraninsurance.ir/users/login/referrer/73736f2f6f6964632f63616c6c6261636b2f63616e63656c2f312e68746d6c.html", text: "بیمه ایران", imgSrc: "./logo-mini-iran.png" },
    { href: "https://totalapp2.dana-insurance.ir/Sepad1/Security/Index?ReturnUrl=%2fsepad1%2f", text: "بیمه دانا", imgSrc: "./logo-mini-dana.png" },
    { href: "https://mccp.iraneit.com/#/login/", text: "سامانه ماد", imgSrc: "./logo-mini-mad.png" },
    { href: "http://192.168.2.45:808/Account/Login?ReturnUrl=%2f/", text: "اتوماسیون اداری", imgSrc: "./logo-mini-faragostar.png" }
    
  ];

  return (
    <GridItem area={"boxplus"} w={"100%"} flexWrap={"wrap"}>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
        w={"100%"}
        gap={4} // فاصله بین ستون‌ها و ردیف‌ها
        dir="rtl"
      >
        {boxData.map((box, index) => (
          <Box
            key={index}
            bg={"#1A1D26"}
            borderRadius="8px"
            color={"#BABDC6"}
            p={4} // افزایش فاصله داخلی
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            h="220px" // افزایش ارتفاع
            w="100%" // استفاده کامل از فضای ستون
          >
            <Link
              href={box.href}
              target="_blank"
              aria-label={box.text}
            >
              <Flex
                height="120px" // افزایش ارتفاع دایره عکس
                width="120px" // افزایش عرض دایره عکس
                bg="white"
                borderRadius="full"
                align="center"
                justify="center"
                overflow="hidden"
              >
                <img
                  src={box.imgSrc}
                  alt={box.text}
                  style={{ height: "100%", width: "100%", objectFit: "contain" }}
                />
              </Flex>
              <Box mt="10px" fontSize="16px"> {/* اندازه فونت را هم کمی بزرگ‌تر کنید */}
                {box.text}
              </Box>
            </Link>
          </Box>
        ))}
      </Grid>
    </GridItem>
  );
};

export default BookMark;
