import { defineType } from "sanity";

export default defineType({
    name: "company",
    title: "Company",
    type: "object",
    fields: [
        {
            name: "name",
            type: "string",
            required: true,
        },
        {
            name: "img",
            type: "image",
            required: true,
        },
        {
            name: "nameImg",
            type: "image",
            required: true,
        },
    ],
});