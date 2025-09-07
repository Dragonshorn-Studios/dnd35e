import { fields } from '@common/data/_module.mjs';
import { WeaponDnd35e } from '../WeaponDnd35e.mjs';
import { defineEquippableItemSchema, EquippableItemSchema, PhysicalItemSystemModel, PhysicalItemSystemSchema } from '@items/physical/index.mjs';
import { requiredBooleanField } from '@helpers/fieldBuilders.mjs';
import { WEAPON_SUBTYPES, weaponTypes, WeaponBaseType, WeaponSubtype, WeaponType, WEAPOON_BASE_TYPES } from './constants.mjs';
import { DAMAGE_TYPES, DamageType } from '@constants/attacks/damageTypes.mjs';

type WeaponDamageSchema = {
  damageRoll: fields.StringField<string, string, true, false, true>;
  damageType: fields.StringField<string, string, true, false, true>;
  critRange: fields.StringField<string, string, true, false, true>;
  critMultiplier: fields.NumberField<number, number, true, false, true>;
  rangeIncrement: fields.NumberField<number, number, true, true, false>;
  attackFormula: fields.StringField<string, string, true, false, true>;
  damageFormula: fields.StringField<string, string, true, false, true>;
};

type WeaponSystemSchema = PhysicalItemSystemSchema & EquippableItemSchema & {
  isMasterwork: fields.BooleanField<boolean, boolean, true, false, true>;
  weaponType: fields.StringField<WeaponType, WeaponType, true, false, true>;
  weaponSubtype: fields.StringField<WeaponSubtype, WeaponSubtype, true, false, true>;
  weaponBaseType: fields.StringField<WeaponBaseType, WeaponBaseType, true, false, true>;
  weaponDamage: fields.SchemaField<WeaponDamageSchema>;
  attackNotes: fields.StringField<string, string, true, false, true>;
  damageNotes: fields.StringField<string, string, true, false, true>;
};

class WeaponSystemModel<
  TParent extends WeaponDnd35e = WeaponDnd35e,
  TSchema extends WeaponSystemSchema = WeaponSystemSchema
> extends PhysicalItemSystemModel<TParent, TSchema> {
  static override defineSchema (): WeaponSystemSchema {
    return {
      ...super.defineSchema(),
      ...defineEquippableItemSchema(),
      // Weapon specific fields go here
      isMasterwork: requiredBooleanField(false),
      weaponType: new fields.StringField<WeaponType, WeaponType, true, false, true>({ choices: weaponTypes, initial: 'Simple', required: true }),
      weaponSubtype: new fields.StringField<WeaponSubtype, WeaponSubtype, true, false, true>({ choices: WEAPON_SUBTYPES, initial: 'Light', required: true }),
      weaponBaseType: new fields.StringField<WeaponBaseType, WeaponBaseType, true, false, true>({ choices: WEAPOON_BASE_TYPES, initial: '', required: true }),
      weaponDamage: new fields.SchemaField<WeaponDamageSchema>({
        damageRoll: new fields.StringField<string, string, true, false, true>({ initial: '', required: true }),
        damageType: new fields.StringField<DamageType, DamageType, true, false, true>({ initial: 'slashing', required: true, choices: DAMAGE_TYPES }),
        critRange: new fields.StringField<string, string, true, false, true>({ initial: '20', required: true }),
        critMultiplier: new fields.NumberField<number, number, true, false, true>({ initial: 2, required: true }),
        rangeIncrement: new fields.NumberField<number, number, true, true, false>({ required: true }),
        attackFormula: new fields.StringField<string, string, true, false, true>({ initial: '', required: true }),
        damageFormula: new fields.StringField<string, string, true, false, true>({ initial: '', required: true }),
      }),
      attackNotes: new fields.StringField<string, string, true, false, true>({ initial: '', required: true }),
      damageNotes: new fields.StringField<string, string, true, false, true>({ initial: '', required: true }),
    };
  }
};

export { WeaponSystemModel, type WeaponSystemSchema };
