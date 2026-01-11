import type { Metadata } from "next";

import "./globals.css";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
import { inter, roboto_mono } from "./font";





export const metadata: Metadata = {
  title: "Cinescope Dashboard",
  description: "Your Gateway to cinematic insight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="bg-emerald-800">
      <body
        className={`${inter.variable} ${roboto_mono.variable} antialiased font-inter`}
      >
        <div className="flex flex-col min-h-screen">
             <Header/>
            {children}
            <Footer/>

        </div>
        
        
      </body>
    </html>
  );
}
