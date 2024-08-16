import { defineType } from "sanity";

export default defineType({
    name: "process",
    title: "Process",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
            initialValue: "My",
        },
        {
            name: "purpleText",
            type: "string",
            required: true,
            initialValue: "approach.",
        },
        {
            name: "steps",
            type: "array",
            of: [{ type: "step" }],
            required: true,
        },
    ],
});