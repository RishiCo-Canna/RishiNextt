import React from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import "@/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Next.js App",
  description: "A Next.js application running on Replit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased",
          inter.variable,
          "font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}