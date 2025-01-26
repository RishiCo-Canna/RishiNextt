import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";

// Configure the client based on the environment
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
const replit_url = process.env.REPL_SLUG ? 
  `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : 
  'http://localhost:4001';

// Create and export the Tina client
export const client = createClient({
  url: `${replit_url}/graphql`,
  token: process.env.TINA_TOKEN,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
  branch,
  mediaStore: {
    loadRemoteMedia: async () => {
      return [];
    },
    persist: async () => {
      return { url: '' };
    },
  },
});

export type Client = typeof client;