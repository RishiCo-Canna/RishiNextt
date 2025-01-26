import type { Template } from "tinacms";

export const iconSchema: Template = {
  name: "icon",
  label: "Icon",
  ui: {
    defaultItem: {
      name: "",
      color: "blue",
      style: "regular"
    },
  },
  fields: [
    {
      type: "string" as const,
      name: "name",
      label: "Icon Name",
      required: true,
    },
    {
      type: "string" as const,
      name: "color",
      label: "Icon Color",
      options: [
        "blue",
        "teal", 
        "green",
        "red",
        "pink",
        "purple",
        "orange",
        "yellow"
      ],
    },
    {
      type: "string" as const,
      name: "style",
      label: "Icon Style", 
      options: ["regular", "bold", "duotone"],
      required: true,
    },
  ],
};