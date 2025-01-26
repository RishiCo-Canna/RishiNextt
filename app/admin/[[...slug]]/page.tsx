"use client";

import { TinaAdmin } from "tinacms";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <TinaAdmin isEmbed/>
    </main>
  );
}