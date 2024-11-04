import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App.jsx";
import "./index.css";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "692px",
  lg: "870px",
  xl: "1120px",
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const styles = {
  styles: {
    global: {
      body: {
        bg: "gray.100", // رنگ بک‌گراند
        color: "black", // رنگ متن
      },
    },
  },
};
const theme = extendTheme({
  breakpoints,
  config,
  styles,
  fonts: {
    heading: "Vazirmatn, sans-serif",
    body: "Vazirmatn, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
