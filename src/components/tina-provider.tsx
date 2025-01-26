"use client";

import { TinaProvider } from "tinacms";
import { TinaCMS } from "tinacms";
import React, { PropsWithChildren } from "react";

export default function TinaCMSProvider({ children }: PropsWithChildren) {
  const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";

  const cms = new TinaCMS({
    enabled: true,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
    branch,
    client: {
      url: branch === "main" 
        ? `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`
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