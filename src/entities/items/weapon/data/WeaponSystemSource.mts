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

interface WeaponSystemSource {
  isMasterwork: boolean;
  weaponType: string;
  weaponSubtype: WeaponSubtype;
  weaponBaseType: WeaponBaseType;
  weaponDamage: WeaponDamage;
  attackNotes: string;
  damageNotes: string;
};

export type {
  WeaponDamage,
  WeaponSystemSource,
};
