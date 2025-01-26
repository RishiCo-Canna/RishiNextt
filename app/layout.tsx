import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A modern Next.js application",
};

import TinaLayout from "./tina-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TinaLayout>{children}</TinaLayout>;
}