import { defineType } from "sanity";

export default defineType({
    name: "socials",
    title: "Socials",
    type: "document",
    fields: [
        {
            name: "socials",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "link",
                            type: "url",
                            required: true,
                        },
                        {
                            name: "img",
                            type: "image",
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
});