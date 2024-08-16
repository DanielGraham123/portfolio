import { defineType } from "sanity";

export default defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "object",
    fields: [
        {
            name: "name",
            type: "string",
            required: true,
        },
        {
            name: "title",
            type: "string",
            required: true,
        },
        {
            name: "quote",
            type: "text",
            required: true,
        },
        {
            name: "img",
            type: "reference",
            to: [{ type: "gallery" }],
            required: true,
        }
    ],
});