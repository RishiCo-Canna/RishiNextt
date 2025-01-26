"use client";

import { TinaAdmin } from "tinacms";
import { client } from "../../lib/tina";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <TinaAdmin 
        client={client}
        cmsCallback={(cms) => {
          // Ensure admin interface is properly configured
          cms.flags.set("branch", process.env.NEXT_PUBLIC_TINA_BRANCH || "main");
          cms.security.skipGitProvider = true;
          return cms;
        }}
      />
    </main>
  );
}