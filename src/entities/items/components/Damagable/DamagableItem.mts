import { ItemSourceDnd35e } from '@items/baseItem/index.mjs';
import { DamagableItemSystemData } from './data/index.mjs';
import { ItemType } from '@items/index.mjs';

interface DamagableItemSourceProps {
  system: DamagableItemSystemData;
};

type DamagableItemSource<TItemType extends ItemType = ItemType> = 
  Omit<ItemSourceDnd35e<TItemType>, "system">
    & DamagableItemSourceProps;

const applyDamagableRuntime = (item: { system: any }) => {
}

export {
  applyDamagableRuntime,
};

export type {
  DamagableItemSourceProps,
  DamagableItemSource,
};
