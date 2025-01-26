"use client";

import { TinaProvider, TinaCMS } from "tinacms";
import { client } from "../lib/tina";
import { PropsWithChildren } from "react";

const cms = new TinaCMS({
  enabled: true,
  client,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
});

export default function TinaWrapper({ children }: PropsWithChildren) {
  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}
