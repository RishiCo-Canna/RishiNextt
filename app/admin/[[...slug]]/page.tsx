"use client";

import { TinaAdmin } from "tinacms";
import { TinaProvider, TinaCMS } from "tinacms";
import { client } from "../../../lib/tina";

const cms = new TinaCMS({
  enabled: true,
  client,
  sidebar: {
    enabled: true,
    position: "displace",
  },
});

export default function AdminPage() {
  return (
    <TinaProvider cms={cms}>
      <div className="min-h-screen">
        <TinaAdmin />
      </div>
    </TinaProvider>
  );
}