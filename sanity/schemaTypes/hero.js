import { defineType } from "sanity";

export default defineType({
    name: "hero",
    title: "Hero",
    type: "document",
    fields: [
        {
            name: "topTitle",
            type: "string",
            required: true,
            initialValue: "Dynamic Web Magic with Next.js",
        },
        {
            name: "mainTitle",
            type: "string",
            required: true,
            initialValue: "Transforming Concepts into Seamless User Experiences",
        },
        {
            name: "subTitle",
            type: "string",
            required: true,
            initialValue: "Hi there! I'm Daniel, a Full Stack Next.js Developer based in Cameroon.",
        },

    ],
});
