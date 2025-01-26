import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";
import type { TinaCMS } from "tinacms";

const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

if (!clientId) {
  throw new Error("Missing NEXT_PUBLIC_TINA_CLIENT_ID environment variable");
}

export const client = createClient({
  url: branch === "main" 
    ? `https://content.tinajs.io/content/${clientId}/github/${branch}`
    : "http://localhost:4001/graphql",
  token: process.env.TINA_TOKEN,
  queries,
});

export type Client = typeof client;