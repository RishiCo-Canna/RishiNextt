"use client";

import { TinaProvider } from "tinacms";
import { TinaCMS } from "tinacms";
import { queries } from "../../../tina/__generated__/types";
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
    queries,
    apiURL: branch === "main"
      ? `https://content.tinajs.io/content/${clientId}/github/${branch}`
      : "http://localhost:4001/graphql",
    mediaStore: {
      loadCustomStore: async () => ({
        publicFolder: "public",
        mediaRoot: "uploads"
      })
    }
  });

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}