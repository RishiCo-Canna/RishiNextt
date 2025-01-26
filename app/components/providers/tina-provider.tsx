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
      url: `https://content.tinajs.io/1.5/content/203e0535-1e4c-4d5e-94bc-1bed80337d1e/github/${branch}`,
      token: process.env.TINA_TOKEN,
    },
    build: {
      publicFolder: "public",
      outputFolder: "admin",
      basePath: "/admin",
    },
    media: {
      tina: {
        publicFolder: "public",
        mediaRoot: "uploads"
      }
    },
    cmsCallback: (cms) => {
      cms.flags.set("branch", branch);
      return cms;
    }
  });

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}