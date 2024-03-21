import { Block } from "payload/types";

export const BlockList: Block = {
    slug: 'list',
    fields: [
        {
            name: 'listTitle',
            type: 'text',
        },
        {
            name: 'listItems',
            type: 'array',
            fields: [
                {
                    name: 'listItem',
                    type: 'text',
                }
            ]
        }
    ]
}