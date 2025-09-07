import { EquippableItem, PhysicalSystemData, PhysicalSystemSource } from '@items/physical/index.mjs';
import { WeaponBaseType, WeaponSubtype } from './constants.mjs';

type WeaponDamage = {
  damageRoll: string;
  damageType: string;
  critRange: string;
  critMultiplier: number;
  rangeIncrement: number;
  attackFormula: string;
  damageFormula: string;
};

interface WeaponSystemSource extends PhysicalSystemSource {
  isMasterwork: boolean;
  weaponType: string;
  weaponSubtype: WeaponSubtype;
  weaponBaseType: WeaponBaseType;
  weaponDamage: WeaponDamage;
  attackNotes: string;
  damageNotes: string;
};

type WeaponSystemData = WeaponSystemSource & PhysicalSystemData & EquippableItem;

export type {
  WeaponDamage,
  WeaponSystemSource,
  WeaponSystemData,
};
