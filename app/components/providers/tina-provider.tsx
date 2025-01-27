"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import React from "react";

export default function TinaCMSProvider({ children }: { children: React.ReactNode }) {
  const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
  const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

  if (!clientId) {
    throw new Error("Missing NEXT_PUBLIC_TINA_CLIENT_ID environment variable");
  }

  const basePath = typeof window !== 'undefined' ? window.location.origin : '';

  const cms = new TinaCMS({
    enabled: true,
    clientId,
    branch,
    token: process.env.TINA_TOKEN,
    cmsCallback: (cms) => {
      cms.flags.set("branch-switcher", true);
      cms.flags.set("chunking", true);
    },
    publicFolder: "public",
    mediaStore: {
      loadFile: async (id) => {
        const file = await fetch(`${basePath}/api/media/${id}`).then(res => res.blob());
        return { file };
      },
      uploadFile: async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch(`${basePath}/api/media/upload`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        return data.id;
      },
    },
  });

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}