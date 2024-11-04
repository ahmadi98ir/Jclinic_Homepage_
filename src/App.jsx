import "./App.css";
import BgLayout from "./Layout/BgLayout";
import GridHadleing from "./Layout/GridHadleing";
import BookMark from "./components/Bookmark/Bookmarks";
import Navbar from "./components/Navbar/Navbar";
import Calender from "./pages/Calender";
import DateAndWeather from "./pages/DateAndWeather";
import Search from "./pages/Search";
import TodoList from "./pages/TodoList";
import { Flex, Link } from "@chakra-ui/react";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Set the interval for refreshing the page every 10 minutes (600,000 milliseconds)
    const interval = setInterval(() => {
      window.location.reload();
    }, 600000); // 600000 ms = 10 minutes

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); 
  return (
    <BgLayout>
      <Navbar />
      <GridHadleing>
        <Search />
        <DateAndWeather />
        <BookMark />
        <TodoList />
        <Calender />
      </GridHadleing>
      <Flex justify={'center'} color={'black'} fontSize={'13px'}><Link href="http://ahmadi98.ir" target="_blank" >Develop By Mahdi Ahmadi</Link></Flex>
    </BgLayout>
  );
}

export default App;
