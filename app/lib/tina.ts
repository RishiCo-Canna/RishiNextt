import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";
import type { TinaCMS } from "tinacms";

export const client = createClient({
  url: "https://content.tinajs.io/",
  token: process.env.TINA_TOKEN!,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  queries,
  cmsCallback: (cms: TinaCMS) => {
    cms.flags.set("branch", process.env.NEXT_PUBLIC_TINA_BRANCH || "main");
    return cms;
  }
});

export type Client = typeof client;