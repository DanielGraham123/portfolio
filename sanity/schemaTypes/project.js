import { defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "object",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
        },
        {
            name: "des",
            type: "text",
            rows: 2,
            required: true,
        },
        {
            name: "img",
            type: "reference",
            to: [{ type: "gallery" }],
            required: true,
        },
        {
            name: "iconLists",
            type: "array",
            of: [{ type: "image" }],
        },
        {
            name: "link",
            type: "url",
            required: true,
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "img",
        },
    },
});