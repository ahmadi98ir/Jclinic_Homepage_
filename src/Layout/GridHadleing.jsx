import { Grid } from "@chakra-ui/react";
import React from "react";

const templateAreas = {
  base: `"search search"
                  "time time"
                  "boxplus boxplus"
                  "calender calender"
                  "todo todo"`,
  sm: `"search search"
                  "time time"
                  "boxplus boxplus"
                  "calender calender"
                  "todo todo"`,
  md: `"search search"
                  "time time"
                  "boxplus boxplus"
                  "calender todo"`,
  lg: `"search  search  search"
                  "time time  time"
                  "boxplus boxplus  boxplus"
                  "todo todo  calender"
                 `,
  xl: `"time search todo" 
         "time boxplus todo"
          "calender x todo"
           "calender y todo"`,
};

const templateColumns = {
  sm: "1fr 1fr",
  lg: "1fr 1fr 1fr",
  xl: "1fr 2fr 1fr",
};

const GridHadleing = (props) => {
  return (
    <Grid
      templateAreas={templateAreas}
      templateColumns={templateColumns}
      // templateRows={{ xl: "1fr 1fr  3fr  4fr" }}
      gap={3}
      h={"100%"}
      // mx={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      {props.children}
    </Grid>
  );
};

export default GridHadleing;
