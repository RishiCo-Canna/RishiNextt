"use client";

import { TinaProvider, TinaCMS } from "tinacms";
import { client } from "../lib/tina";
import { PropsWithChildren } from "react";

export default function TinaWrapper({ children }: PropsWithChildren) {
  return (
    <TinaProvider 
      cms={new TinaCMS({ 
        enabled: true,
        client,
        // Production mode configuration
        sidebar: process.env.NODE_ENV === "production" ? false : true,
        security: {
          skipGitProvider: true,
        }
      })}
    >
      {children}
    </TinaProvider>
  );
}