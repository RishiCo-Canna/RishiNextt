"use client";

import { TinaProvider, TinaCMS } from "tinacms";
import { client } from "../lib/tina";
import { PropsWithChildren } from "react";

// Create the CMS instance with full configuration
const cms = new TinaCMS({
  enabled: true,
  client,
  sidebar: {
    hidden: false,
    position: "displace",
  },
  toolbar: {
    hidden: false,
  },
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
});

// Wrap the application with TinaProvider
export default function TinaWrapper({ children }: PropsWithChildren) {
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}