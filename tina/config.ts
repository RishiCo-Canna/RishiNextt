import { defineConfig } from "tinacms";

const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

if (!clientId) {
  throw new Error("Missing NEXT_PUBLIC_TINA_CLIENT_ID environment variable");
}

export default defineConfig({
  branch,
  clientId,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "public/admin",
    publicFolder: "public",
    basePath: "",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
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
          }
        ],
      },
    ],
  },
});