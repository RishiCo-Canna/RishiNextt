import { createClient } from "tinacms/dist/client";
import { queries } from "../tina/__generated__/types";
import type { TinaCMS } from "tinacms";

/** 
 * Production client configuration for Tina Cloud
 */
export const client = createClient({
  url: "https://content.tinajs.io/",
  token: process.env.TINA_TOKEN!,
  queries,
  cmsCallback: (cms: TinaCMS) => {
    cms.flags.set("branch", process.env.NEXT_PUBLIC_TINA_BRANCH || "main");
    return cms;
  }
});

export type Client = typeof client;