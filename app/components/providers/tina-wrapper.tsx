"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import React from "react";

export default function TinaWrapper({ children }: { children: React.ReactNode }) {
  const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
  const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

  if (!clientId) {
    throw new Error("Missing NEXT_PUBLIC_TINA_CLIENT_ID environment variable");
  }

  const cms = new TinaCMS({
    enabled: true,
    clientId,
    branch,
    token: process.env.TINA_TOKEN,
    cmsCallback: (cms) => {
      cms.flags.set("branch-switcher", true);
    },
  });

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
