'use client'


import { Page } from '../../payload-types'
import { Gutter } from '../_components/Gutter'
import RichText from '../_components/RichText'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { BlockType } from '../../models/block.model'
import { BlockHero } from '../_components/_blocks/BlockHero'
import { BlockList } from '../_components/_blocks/BlockList'
import classes from './index.module.scss'

const blockMap = {
  hero: BlockHero,
  list: BlockList
}

export const PageTemplate: React.FC<{ page: Page | null | undefined }> = ({ page }) => {

  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || '',
    depth: 2,
    initialData: page,
  })

  return (
    <main className={classes.page}>

      <Gutter>

        {data?.layout?.map((block, index) => {
          const { blockType } = block;

          const key = `${blockType}-${index}`;
          if (blockType && blockType in blockMap) {

            const Block = blockMap[blockType] as React.FC<{ block: BlockType<typeof blockType> }>
            return <Block key={key} block={block} />
          }
        })}

        <RichText content={data?.richText} />

      </Gutter>
    </main>
  )
}
