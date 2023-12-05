// contexts/authContext.js

"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// "use client";

// // contexts/AuthContext.js
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const login = () => {
//     // اینجا می‌توانید لاگین کاربر را پیاده‌سازی کنید
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     // اینجا می‌توانید لاگ‌آوت کاربر را پیاده‌سازی کنید
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
