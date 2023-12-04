// reducers/authReducer.js
const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default authReducer;

// // reducers/authReducer.js
// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: false,
//   },
//   reducers: {
//     setIsLoggedIn: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//   },
// });

// export const { setIsLoggedIn } = authSlice.actions;
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// export default authSlice.reducer;
