// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // دیگر reducerها اگر دارید
  },
});

export default store;
