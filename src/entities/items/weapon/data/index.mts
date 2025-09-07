import { BasePhysicalItemSource } from '@items/physical/index.mjs';
import type {
  WeaponType,
  WeaponSubtype,
  WeaponBaseType,
} from './constants.mjs';
import {
  weaponTypes,
  WEAPON_SUBTYPES,
  WEAPOON_BASE_TYPES,
} from './constants.mjs';
import { WeaponSystemModel, type WeaponSystemSchema } from './model';

import type {
  WeaponDamage,
  WeaponSystemSource,
  WeaponSystemData,
} from './system.mjs';

type WeaponSource = BasePhysicalItemSource<'Weapon', WeaponSystemSource>;

export type {
  WeaponSource,
};

export type {
  WeaponType,
  WeaponSubtype,
  WeaponBaseType,
  WeaponDamage,
  WeaponSystemSource,
  WeaponSystemData,
  WeaponSystemSchema,
};

export {
  weaponTypes as WEAPON_TYPES,
  WEAPON_SUBTYPES,
  WEAPOON_BASE_TYPES,
  WeaponSystemModel,
};
