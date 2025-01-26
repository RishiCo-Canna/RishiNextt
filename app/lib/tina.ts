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
  queries,
  branch,
  // Configure media handling for Replit
  mediaStore: {
    loadRemoteMedia: async () => {
      // Return empty array as we're not handling media in this basic setup
      return [];
    },
    persist: async () => {
      // Return empty URL as we're not handling media upload in this basic setup
      return { url: '' };
    },
  },
  // Configure the API endpoint for Replit
  apiUrl: `${replit_url}/api/graphql`,
});

export type Client = typeof client;