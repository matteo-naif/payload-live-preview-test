'use client'

import { FC } from 'react';
import { BlockListModel } from '../../../models/block.model';

type Props = {
    block: BlockListModel
}

export const BlockList: FC<Props> = ({ block }) => {

    // const { data: block } = useLivePreview({
    //     serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || '',
    //     depth: 2,
    //     initialData: blockProps,
    // })

    return <div>
        <h5>{block.listTitle}</h5>
        <ul>
            {block.listItems?.map(listItem => (
                <li key={listItem.id}>{listItem.listItem}</li>
            ))}
        </ul>
    </div>;
};