import { workExperience } from "@/data";
import { defineType } from "sanity";

export default defineType({
    name: "works",
    title: "Works",
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
            initialValue: "work experience.",
        },
        {
            name: "works",
            type: "array",
            of: [{ type: "work" }],
            required: true,
            // initialValue: () => workExperience.map((work) => ({
            //     title: work.title,
            //     desc: work.desc,
            //     className: work.className,
            // })),
        }
    ],
});