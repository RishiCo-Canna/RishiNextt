"use client";

import { TinaAdmin } from "tinacms";
import { client } from "../../lib/tina";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <TinaAdmin client={client} />
    </main>
  );
}