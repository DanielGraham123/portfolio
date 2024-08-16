import { defineType } from "sanity";

export default defineType({
    name: "bentoCard",
    title: "Bento Card",
    type: "object",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
        },
        {
            name: "description",
            rows: 2,
            type: "text",
            required: true,
        },
        {
            name: "className",
            type: "string",
        },
        {
            name: "imgClassName",
            type: "string",
        },
        {
            name: "titleClassName",
            type: "string",
        },
        {
            name: "img",
            type: "reference",
            to: [{ type: "gallery" }],
        },
        {
            name: "spareImg",
            type: "reference",
            to: [{ type: "gallery" }],
        }
    ],
    preview: {
        select: {
            title: "title",
            media: "img",
        },
    },
});