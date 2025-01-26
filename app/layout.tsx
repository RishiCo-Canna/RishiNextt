import "./globals.css";
import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}