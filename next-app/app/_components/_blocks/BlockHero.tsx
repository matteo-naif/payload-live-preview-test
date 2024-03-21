'use client'

import { FC } from 'react';
import { BlockHeroModel } from '../../../models/block.model';

type Props = {
    block: BlockHeroModel
}

export const BlockHero: FC<Props> = ({ block }) => {
    return <div>
        <h1>{block.heroTitle}</h1>
        <h2>{block.heroSubtitle}</h2>
    </div>;
};