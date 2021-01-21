
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'jotai'
import App from "./App";
import './index.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);