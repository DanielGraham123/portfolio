import { projects } from "@/data";
import { defineType } from "sanity";

export default defineType({
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
            initialValue: "A small collection of",
        },
        {
            name: "purpleText",
            type: "string",
            required: true,
            initialValue: "recent projects",
        },
        {
            name: "projects",
            type: "array",
            of: [{ type: "project" }],
            required: true,
            initialValue: () => projects.map((project) => ({
                title: project.title,
                des: project.des,
                // img: {
                //     _type: "reference",
                //     _ref: project.img,
                // },
                // iconLists: project.iconLists.map((icon) => ({
                //     _type: "image",
                //     asset: {
                //         _type: "reference",
                //         _ref: icon,
                //     },
                // })),
                link: project.link,
            })),
        }

    ],
});