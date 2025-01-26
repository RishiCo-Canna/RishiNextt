"use client";

import { TinaProvider } from "tinacms";
import { TinaCMS } from "tinacms";
import React, { PropsWithChildren } from "react";

export default function TinaCMSProvider({ children }: PropsWithChildren) {
  const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
  const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

  if (!clientId) {
    throw new Error("Missing NEXT_PUBLIC_TINA_CLIENT_ID environment variable");
  }

  const cms = new TinaCMS({
    enabled: true,
    clientId,
    branch,
    client: {
      url: branch === "main"
        ? `https://content.tinajs.io/1.5/content/${clientId}/github/${branch}`
        : "http://localhost:4001/graphql",
      token: process.env.TINA_TOKEN,
    },
    media: {
      tina: {
        publicFolder: "public",
        mediaRoot: "uploads"
      }
    }
  });

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}