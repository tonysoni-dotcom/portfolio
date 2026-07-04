import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ActiveSectionProvider } from "./components/ActiveSectionContext";
import React from "react";

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
        <ActiveSectionProvider>
          <Header/>
          {children}
        </ActiveSectionProvider> 
      </body>
    </html>
  );
}
