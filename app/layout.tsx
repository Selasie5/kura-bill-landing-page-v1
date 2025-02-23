import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "./components/layout/Navbar";


//Initializing font variables
const Manrope_Font = DM_Sans({
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Kura Bill",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${Manrope_Font.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
     
    </html>
  );
}
