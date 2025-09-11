import { WeaponDnd35e } from '../index.mjs';
import { defineEquippableItemSchema, EquippableItemSchema, PhysicalItemSystemModel, PhysicalItemSystemSchema } from '@items/physical/index.mjs';
import { requiredBooleanField } from '@helpers/fieldBuilders.mjs';
import { WEAPON_SUBTYPES, weaponTypes, WeaponBaseType, WeaponSubtype, WeaponType, WEAPOON_BASE_TYPES } from './constants.mjs';
import { DAMAGE_TYPES, DamageType } from '@constants/attacks/damageTypes.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';

const { fields } = foundry.data;

type WeaponDamageSchema = {
  damageRoll: fieldsType.StringField<string, string, true, false, true>;
  damageType: fieldsType.StringField<string, string, true, false, true>;
  critRange: fieldsType.StringField<string, string, true, false, true>;
  critMultiplier: fieldsType.NumberField<number, number, true, false, true>;
  rangeIncrement: fieldsType.NumberField<number, number, true, true, false>;
  attackFormula: fieldsType.StringField<string, string, true, false, true>;
  damageFormula: fieldsType.StringField<string, string, true, false, true>;
};

type WeaponSystemSchema = PhysicalItemSystemSchema & EquippableItemSchema & {
  isMasterwork: fieldsType.BooleanField<boolean, boolean, true, false, true>;
  weaponType: fieldsType.StringField<WeaponType, WeaponType, true, false, true>;
  weaponSubtype: fieldsType.StringField<WeaponSubtype, WeaponSubtype, true, false, true>;
  weaponBaseType: fieldsType.StringField<WeaponBaseType, WeaponBaseType, true, false, true>;
  weaponDamage: fieldsType.SchemaField<WeaponDamageSchema>;
  attackNotes: fieldsType.StringField<string, string, true, false, true>;
  damageNotes: fieldsType.StringField<string, string, true, false, true>;
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
      weaponBaseType: new fields.StringField<WeaponBaseType, WeaponBaseType, true, false, true>({ choices: WEAPOON_BASE_TYPES, initial: '', required: true, blank: true }),
      weaponDamage: new fields.SchemaField<WeaponDamageSchema>({
        damageRoll: new fields.StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
        damageType: new fields.StringField<DamageType, DamageType, true, false, true>({ initial: 'D35E.DRSlashing', required: true, choices: DAMAGE_TYPES }),
        critRange: new fields.StringField<string, string, true, false, true>({ initial: '20', required: true }),
        critMultiplier: new fields.NumberField<number, number, true, false, true>({ initial: 2, required: true }),
        rangeIncrement: new fields.NumberField<number, number, true, true, false>({ required: true }),
        attackFormula: new fields.StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
        damageFormula: new fields.StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
      }),
      attackNotes: new fields.StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
      damageNotes: new fields.StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
    };
  }
};

export { WeaponSystemModel, type WeaponSystemSchema };
