import { gridItems } from "@/data";
import { defineType } from "sanity";

export default defineType({
    name: "bento",
    title: "Bento Grid",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
            initialValue: "Bento Grid",
        },
        {
            name: "bentoCards",
            type: "array",
            of: [{ type: "bentoCard" }],
            required: true,
            // initialValue: () => gridItems.map((item) => ({
            //     title: item.title,
            //     description: item.description,
            //     className: item.className,
            //     imgClassName: item.imgClassName,
            //     titleClassName: item.titleClassName,
            // })),
        }

    ],
});