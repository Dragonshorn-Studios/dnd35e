import { IdentifiableItemSystemSource } from "./index.mjs";
import { ItemSourceDnd35e } from "@items/baseItem/index.mjs";
import { ItemType } from "@items/index.mjs";

// type IdentifiableItemType = PhysicalItemType | 'material';

type IdentifiableItemSource<TItemType extends ItemType = ItemType> = Omit<ItemSourceDnd35e<TItemType>, "system"> & {
  system: IdentifiableItemSystemSource;
};

export type { IdentifiableItemSource };