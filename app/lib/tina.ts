import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";

const replit_url = process.env.REPL_SLUG ? 
  `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : 
  'http://localhost:4001';

export const client = createClient({
  url: `${replit_url}/graphql`,
  token: process.env.TINA_TOKEN,
  queries,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
});

export type Client = typeof client;