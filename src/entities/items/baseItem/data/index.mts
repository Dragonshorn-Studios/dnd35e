import { PhysicalItemSource, PhysicalItemType } from '@items/components/physical/index.mjs';
import { ItemSystemModel } from './model.mjs';
import type {
  ItemSystemModelConstructor,
  ItemSystemSchema,
} from './model.mjs';
import type {
  ItemFlagsDnd35e,
  ItemGrantData,
  ItemGrantDeleteAction,
  ItemGranterSource,
  ItemGrantSource,
  ItemSystemData,
  ItemSystemSource,
} from './system.mjs';
import { type DocumentFlagsSource } from '@common/data/_module.mjs';
import { MaterialSource } from '@items/material/index.mjs';

type ItemSourceFlagsDnd35e = DocumentFlagsSource & {
    dnd35e?: {
        [key: string]: unknown;
    };
};

type ItemType = PhysicalItemType | 'material';

type BaseItemSourceDnd35e<
    TType extends ItemType,
    TSystemSource extends ItemSystemSource = ItemSystemSource,
> = foundry.documents.ItemSource<TType, TSystemSource> & {
    flags: ItemSourceFlagsDnd35e;
};

type ItemSourceDnd35e = PhysicalItemSource | MaterialSource;

export type {
  ItemType,
  ItemSourceDnd35e,
  ItemSystemSchema,
  BaseItemSourceDnd35e,
  ItemFlagsDnd35e,
  ItemSourceFlagsDnd35e,
  // ItemGrantData,
  // ItemGrantDeleteAction,
  // ItemGranterSource,
  // ItemGrantSource,
  ItemSystemData,
  ItemSystemSource,
  ItemSystemModelConstructor,
};
export { ItemSystemModel };
