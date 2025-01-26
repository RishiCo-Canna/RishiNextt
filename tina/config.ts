import { defineConfig } from "tinacms";

// Your publishing URL
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID as string;
const token = process.env.TINA_TOKEN as string;

export default defineConfig({
  branch,
  clientId,
  token,

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
  // Enable cloud-based content management
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          }
        ],
      }
    ],
  },
});