import { companies } from "@/data";
import { defineType } from "sanity";

export default defineType({
    name: "companies",
    title: "Companies",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
            initialValue: "Companies",
        },
        {
            name: "companies",
            type: "array",
            of: [{ type: "company" }],
            required: true,
            initialValue: () => companies.map((company) => ({
                name: company.name,
            })),
        }
    ],
});