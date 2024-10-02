import { testimonials } from "@/data";
import { defineType } from "sanity";

export default defineType({
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            required: true,
            initialValue: "Kinds words from",
        },
        {
            name: "purpleText",
            type: "string",
            required: true,
            initialValue: "satisfied clients",
        },
        {
            name: "testimonials",
            type: "array",
            of: [{ type: "testimonial" }],
            required: true,
            // initialValue: () => testimonials.map((testimonial) => ({
            //     name: testimonial.name,
            //     title: testimonial.title,
            //     quote: testimonial.quote,
            // })),
        }

    ],
});