import { defineConfig } from "tinacms";

const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
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
            label: "Post Body",
            isBody: true,
            templates: [
              {
                name: "CallToAction",
                label: "Call to Action",
                fields: [
                  {
                    name: "text",
                    label: "Text",
                    type: "string",
                    required: true,
                  },
                  {
                    name: "url",
                    label: "URL",
                    type: "string",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "global",
        label: "Global",
        path: "content/global",
        format: "json",
        fields: [
          {
            type: "object",
            name: "header",
            label: "Header",
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
  },
});