import { Page } from "../payload-types";

// Remove undefined type from union type
export type RemoveUndefined<T> = T extends undefined | null ? never : T;

export type BlockType<T> = Extract<RemoveUndefined<Page["layout"]>[0], { blockType: T }>;

export type BlockHeroModel = BlockType<'hero'>
export type BlockListModel = BlockType<'list'>

export type Blocks = BlockHeroModel | BlockListModel