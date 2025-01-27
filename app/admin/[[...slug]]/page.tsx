"use client";

import dynamic from "next/dynamic";

// Dynamically import TinaAdmin with no SSR
const TinaAdmin = dynamic(() => 
  import("tinacms").then((mod) => mod.TinaAdmin), 
  { ssr: false }
);

export default function AdminPage() {
  return <TinaAdmin />;
}