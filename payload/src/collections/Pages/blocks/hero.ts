import { Block } from "payload/types";

export const BlockHero: Block = {
    slug: 'hero',
    fields: [
        {
            name: 'heroTitle',
            type: 'text',
        },
        {
            name: 'heroSubtitle',
            type: 'text',
        }

    ]
}