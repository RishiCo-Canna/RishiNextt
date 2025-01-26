"use client";

import { TinaAdmin } from "tinacms";

export default function AdminPage() {
  return (
    <TinaAdmin
      isLocalClient={false}
      sidebar={false}
    />
  );
}