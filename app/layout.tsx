import type { Metadata } from "next";

import "./globals.css";
import { inter, roboto_mono } from "@/app/fonts";
import { cn } from "@/lib/utils";

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
    <html lang="en" data-theme="light">
      <body
        className={cn(inter.variable, roboto_mono.variable, inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
