"use client";

import { TinaProvider } from "tinacms";
import { TinaCMS } from "tinacms";
import { client } from "../lib/tina";
import { PropsWithChildren } from "react";

export default function TinaWrapper({ children }: PropsWithChildren) {
  const cms = new TinaCMS({
    enabled: true,
    client,
    branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main"
  });

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}