"use client";

import "./globals.css";
import React from "react";

// export const metadata: { title: string; description: string } = {
//   title: "طیورتک",
//   description: "مرغداری نوین",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="h-screen w-full">{children}</body>
    </html>
  );
}
