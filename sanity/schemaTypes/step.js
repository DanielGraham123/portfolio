import { defineType } from "sanity";

export default defineType({
    name: "step",
    title: "Step",
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
            name: "phaseText",
            type: "string",
            required: true,
        },
    ],
});