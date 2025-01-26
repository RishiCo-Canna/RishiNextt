// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || "main";
var clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
if (!clientId) {
  throw new Error("Missing NEXT_PUBLIC_TINA_CLIENT_ID environment variable");
}
var config_default = defineConfig({
  branch,
  clientId,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: "/admin"
  },
  media: {
    loadCustomStore: async () => ({
      accept: "*",
      async store(files) {
        console.log("Files to store:", files);
        return ["placeholder-url"];
      }
    })
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
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "global",
        label: "Global",
        path: "content/global",
        format: "json",
        ui: {
          global: true
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
                label: "Site Name"
              },
              {
                type: "object",
                name: "nav",
                label: "Navigation",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.label
                  })
                },
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label"
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "Link"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
