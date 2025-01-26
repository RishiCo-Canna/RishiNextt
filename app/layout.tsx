"use client";

import "./globals.css";
import type { Metadata } from "next";
import { TinaCMS, TinaProvider } from "tinacms";
import { client } from "./lib/tina";

const cms = new TinaCMS({
  enabled: true,
  client,
  sidebar: true,
});

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A modern Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <TinaProvider cms={cms}>
          {children}
        </TinaProvider>
      </body>
    </html>
  );
}