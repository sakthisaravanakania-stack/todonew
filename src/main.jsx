import React from "react";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./store/Store";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import axios from "axios";
import "./index.css";

axios.defaults.baseURL =
  "https://6aaccea0a2413bf0ec11089e.mockapi.io/";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);