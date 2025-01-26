"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import { client } from "./lib/tina";

const cms = new TinaCMS({
  enabled: true,
  client,
});

export default function TinaLayout({
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