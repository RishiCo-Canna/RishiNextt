"use client";

import { TinaProvider, TinaCMS } from "tinacms";
import { client } from "../lib/tina";
import { PropsWithChildren } from "react";

// Define collections schema statically to avoid fetch
const schema = {
  collections: [
    {
      name: "post",
      label: "Posts",
      path: "content/posts",
      format: "mdx",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          isTitle: true,
          required: true,
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
          required: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
    },
    {
      name: "global",
      label: "Global",
      path: "content/global",
      format: "json",
      ui: {
        global: true,
      },
      fields: [
        {
          name: "header",
          label: "Header",
          type: "object",
          fields: [
            {
              type: "string",
              name: "name",
              label: "Site Name",
            },
            {
              type: "object",
              name: "nav",
              label: "Navigation",
              list: true,
              fields: [
                {
                  type: "string",
                  name: "label",
                  label: "Label",
                },
                {
                  type: "string",
                  name: "href",
                  label: "Link",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Create the CMS instance with full configuration
const cms = new TinaCMS({
  enabled: true,
  client,
  sidebar: {
    position: "displace",
    buttons: {
      save: "Save",
      reset: "Reset",
    },
  },
  // Configure APIs for Replit environment
  apis: {
    tina: {
      isLocalClient: true, // Force local client mode for Replit
      clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
      branch: process.env.NEXT_PUBLIC_TINA_BRANCH,
    },
  },
  schema, // Provide schema directly instead of fetching
});

// Wrap the application with TinaProvider
export default function TinaWrapper({ children }: PropsWithChildren) {
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}