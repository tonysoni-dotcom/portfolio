import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ActiveSectionProvider } from "./components/ActiveSectionContext";

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-black scroll-smooth bg-black text-white">
        <ActiveSectionProvider>
          <Header/>
          {children}
        </ActiveSectionProvider> 
      </body>
    </html>
  );
}
