const initialState = {
  isLoggedIn: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, token: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, token: null };
    default:
      return state;
  }
};

export default authReducer;

// // redux/reducers.js
// const initialState = {
//   isLoggedIn: false,
//   token: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         isLoggedIn: true,
//         token: action.payload,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         isLoggedIn: false,
//         token: null,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
