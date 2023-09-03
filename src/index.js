import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./component/Redux/store.js";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
