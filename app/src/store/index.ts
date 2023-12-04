import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";

const rootReducer = {
  auth: authReducer,
  // reducerهای دیگر اگر وجود دارند
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// // store/index.js
// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../reducers/authReducer";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     // دیگر reducerها اگر وجود دارند
//   },
// });

// export default store;
