import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";


//Initializing font variables
const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: "400"
});

export const headerFont = localFont({
  src:"./fonts/grifterbold700.otf",
})
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
        className={` ${DMSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
