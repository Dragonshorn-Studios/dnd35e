import type { ItemType } from '@items/itemTypes.mjs';
import { ItemFlagsSourceDnd35e, ItemSystemSource } from './index.mjs';

type BaseItemSourceDnd35e = foundry.documents.ItemSource<string, object>;

type ItemSourceDnd35e<TItemType extends ItemType = ItemType> = Omit<BaseItemSourceDnd35e, "flags" | "system" | "type"> & {
    flags: ItemFlagsSourceDnd35e;
    system: ItemSystemSource;
    type: TItemType;
};

export type {
  // BaseItemSourceDnd35e,
  ItemSourceDnd35e,
};