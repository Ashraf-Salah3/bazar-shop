import { configureStore } from "@reduxjs/toolkit";
import bazzerReducer from "./bazzerSlice"; // Import the default export (reducer) with a meaningful name
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    bazar: bazzerReducer,
    auth: authReducer
  },
});

export default store;
