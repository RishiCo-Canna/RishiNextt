import { createClient } from "tinacms/dist/client";
import type { TinaClient } from "tinacms/dist/client";

// Define a type for our queries
type Queries = {
  [key: string]: {
    __type: string;
    query: string;
    variables: Record<string, any>;
    data: any;
  };
};

export const client = createClient({
  url: "http://localhost/admin/index.html",
  queries: {},
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH ?? 'main',
  token: process.env.TINA_TOKEN,
});