
"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import React from "react";
import { branch, clientId } from "../../lib/tina";

export default function TinaWrapper({ children }: { children: React.ReactNode }) {
  const cms = new TinaCMS({
    enabled: true,
    clientId,
    branch,
    token: process.env.TINA_TOKEN,
    cmsCallback: (cms) => {
      cms.flags.set("branch-switcher", true);
    },
    mediaStore: {
      publicFolder: "public",
      mediaRoot: "uploads"
    },
  });

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
