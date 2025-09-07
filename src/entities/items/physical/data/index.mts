import { BaseItemSourceDnd35e } from '@items/baseItem/index.mjs';
import type { PhysicalSystemData, PhysicalSystemSource } from './system.mjs';
import { PhysicalItemSystemModel, type PhysicalItemSystemSchema } from './model.mjs';
import { WeaponSource } from '@items/weapon/index.mjs';
import { PHYSICAL_ITEM_TYPES, type PhysicalItemType } from './constants.mjs';

type BasePhysicalItemSource<
    TType extends PhysicalItemType,
    TSystemSource extends PhysicalSystemSource = PhysicalSystemSource,
> = BaseItemSourceDnd35e<TType, TSystemSource>;

type PhysicalItemSource =
    | WeaponSource;

export type {
  PhysicalItemType,
  BasePhysicalItemSource,
  PhysicalItemSource,
  PhysicalItemSystemSchema,
  PhysicalSystemSource,
  PhysicalSystemData,
};

export {
  PHYSICAL_ITEM_TYPES,
  PhysicalItemSystemModel,
};
