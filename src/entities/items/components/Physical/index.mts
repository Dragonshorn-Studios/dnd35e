import type { PhysicalItem } from './PhysicalItemDnd35e.mjs';
import { PhysicalItemSheet } from './sheet/index.mjs';
import type {
  PhysicalItemSheetRenderContext,
  PhysicalItemSheetStore,
} from './sheet/index.mjs';
// import { defineEquippableItemSchema, type EquippableItem, type EquippableItemSchema } from './components/EquippableItem.mjs';

export type {
  PhysicalItemType,
  // BasePhysicalItemSource,
  PhysicalItemSource,
  PhysicalItemSystemSchema,
  // PhysicalSystemSource,
  // PhysicalSystemData,
} from './data/index.mjs';

export {
  PHYSICAL_ITEM_TYPES,
  PhysicalItemSystemModel,
  applyPhysicalSchema,
  applyPhysicalRuntime,
} from './data/index.mjs';

export type {
  PhysicalItemSheetRenderContext,
  PhysicalItemSheetStore,
  PhysicalItem,
  // EquippableItem,
  // EquippableItemSchema,
};

export {
  PhysicalItemSheet,
  // defineEquippableItemSchema,
};
