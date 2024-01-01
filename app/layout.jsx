// "use client";

import "./globals.css";
import React from "react";

export const metadata = {
  title: "طیورتک",
  description: "مرغداری هوشمند",
  icons: {
    icon: "/icons/widget-enabled.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="h-screen w-full">{children}</body>
    </html>
  );
}
