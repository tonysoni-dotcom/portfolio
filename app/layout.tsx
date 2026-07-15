import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Provider from "./components/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vishnu Soni - Frontend Engineer",
  description: "Frontend Engineer building cool shit!",
};

export default function RootLayout({ children } : {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-black scroll-smooth text-white pb-10">
        <Provider>
            {children}
        </Provider>
      </body>
    </html>
  );
}
