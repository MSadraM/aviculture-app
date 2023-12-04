// import { Provider } from "react-redux";

"use client";

import "./globals.css";
import { Provider } from "react-redux";
import store from "./src/store";
import React from "react";
// export const metadata: { title: string; description: string } = {
//   title: "طیورتک",
//   description: "مرغداری نوین",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <Provider store={store}>
        <body className="h-screen w-full">{children}</body>
      </Provider>
    </html>
  );
}
