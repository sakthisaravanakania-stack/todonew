import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/Todoslice.jsx";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});