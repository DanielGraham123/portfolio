import { defineField, defineType } from "sanity"
import { TfiGallery } from "react-icons/tfi"

export default defineType({
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    icon: TfiGallery,
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
        defineField({
            name: 'display',
            type: 'string',
            title: 'Display as',
            description: 'How should we display these images?',
            options: {
                list: [
                    { title: 'Stacked on top of each other', value: 'stacked' },
                    { title: 'In-line', value: 'inline' },
                    { title: 'Carousel', value: 'carousel' },
                ],
                layout: 'radio', // <-- defaults to 'dropdown'
            },
        }),
        defineField({
            name: 'zoom',
            type: 'boolean',
            title: 'Zoom enabled',
            description: 'Should we enable zooming of images?',
        }),
    ],
    preview: {
        select: {
            image: 'image',
        },
        prepare(selection) {
            const { image } = selection;

            return {
                title: `${image.alt}`,
                media: image,
            };
        },
    },
});