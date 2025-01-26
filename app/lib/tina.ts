import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";

// Create and export the Tina client
export const client = createClient({
  url: "https://content.tinajs.io/",
  token: process.env.TINA_TOKEN,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  queries,
});

export type Client = typeof client;