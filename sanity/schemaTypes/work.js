import { defineType } from "sanity";

export default defineType({
    name: "work",
    title: "Work",
    type: "object",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
        },
        {
            name: "desc",
            type: "text",
            rows: 3,
            required: true,
        },
        {
            name: "className",
            type: "string",
        },
        {
            name: "thumbnail",
            type: "image",
            required: true,
        },
    ],
});