"use client";

import { TinaAdmin } from "tinacms";
import { client } from "../../../lib/tina";

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <TinaAdmin client={client} />
    </div>
  );
}