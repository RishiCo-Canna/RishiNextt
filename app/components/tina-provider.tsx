"use client";

import { TinaProvider } from "tinacms";
import { TinaCMS } from "tinacms";
import { client } from "../lib/tina";
import { PropsWithChildren } from "react";

export default function TinaCMSProvider({ children }: PropsWithChildren) {
  const cms = new TinaCMS({
    enabled: true,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  });

  return (
    <TinaProvider cms={cms} client={client}>
      {children}
    </TinaProvider>
  );
}