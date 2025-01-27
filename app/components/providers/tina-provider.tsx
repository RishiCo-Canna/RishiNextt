"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import React from "react";

// Create a singleton instance of TinaCMS
const cms = new TinaCMS({
  enabled: true,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  token: process.env.TINA_TOKEN,
});

export default function TinaCMSProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}