import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const TinaCMSProvider = dynamic(
  () => import("@/components/providers/tina-provider"),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-background">
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      </div>
    )
  }
);

export const metadata: Metadata = {
  title: "Next.js App with Tina CMS",
  description: "A modern Next.js application with Tina CMS integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <TinaCMSProvider>
          {children}
        </TinaCMSProvider>
      </body>
    </html>
  );
}