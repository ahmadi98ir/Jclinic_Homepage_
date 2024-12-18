import { Grid, GridItem, useBoolean } from "@chakra-ui/react";
import React from "react";
import SearchBox from "../components/searchBox/SearchBox";
import BookMark from "../components/Bookmark/Bookmarks";
// import SuggestionTools from "../components/searchBox/SuggestionTools";
import BackDrop from "../Layout/BackDrop";

const Search = () => {
  const [show, setShow] = useBoolean();
  const showHandler = () => {
    setShow.on();
  };
  const toggleHandler = () => {
    setShow.toggle();
  };
  
  return (
    <GridItem w={"0%"} area={"search"} mx={"auto"}>
      <Grid gap={0} w={"0%"} h={"0%"}>
        <SearchBox setShow={showHandler} show={show} />
        {show ? <SuggestionTools /> : null}
      </Grid>
      <BackDrop show={show} toggle={toggleHandler} />
    </GridItem>
  );
};

export default Search;
