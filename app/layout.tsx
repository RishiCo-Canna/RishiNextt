import "./globals.css";
import type { Metadata } from "next";
import TinaWrapper from "./components/tina-provider";

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
        <TinaWrapper>{children}</TinaWrapper>
      </body>
    </html>
  );
}