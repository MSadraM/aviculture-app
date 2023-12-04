"use client";

// contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const login = () => {
    // اینجا می‌توانید لاگین کاربر را پیاده‌سازی کنید
    setIsLoggedIn(true);
  };

  const logout = () => {
    // اینجا می‌توانید لاگ‌آوت کاربر را پیاده‌سازی کنید
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
