"use client";

import { TinaAdmin } from "tinacms";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <TinaAdmin
        cmsCallback={(cms) => {
          cms.flags.set("branch", process.env.NEXT_PUBLIC_TINA_BRANCH || "main");
          cms.flags.set("baseUrl", typeof window !== 'undefined' ? window.location.origin : '');
          return cms;
        }}
        sidebar
        isLocalClient={false}
      />
    </main>
  );
}