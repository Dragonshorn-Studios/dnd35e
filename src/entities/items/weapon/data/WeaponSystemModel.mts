import type { fields as fieldsType } from '@common/data/_module.mjs';

import { requiredBooleanField } from "@helpers/fieldBuilders.mjs";
import { ItemSystemModelBase } from "@items/baseItem/index.mjs";
import { applyPhysicalSchema } from "@items/components/Physical/index.mjs";
import { WEAPON_SUBTYPES, WEAPON_TYPES, WeaponBaseType, WeaponSubtype, WeaponType, WEAPOON_BASE_TYPES } from './constants.mjs';
import { DAMAGE_TYPES, DamageType } from '@constants/attacks/damageTypes.mjs';

const {
  fields: {
    StringField,
    SchemaField,
    NumberField,
  }
} = foundry.data;

type WeaponDamageSchema = {
  damageRoll: fieldsType.StringField<string, string, true, false, true>;
  damageType: fieldsType.StringField<string, string, true, false, true>;
  critRange: fieldsType.StringField<string, string, true, false, true>;
  critMultiplier: fieldsType.NumberField<number, number, true, false, true>;
  rangeIncrement: fieldsType.NumberField<number, number, true, true, false>;
  attackFormula: fieldsType.StringField<string, string, true, false, true>;
  damageFormula: fieldsType.StringField<string, string, true, false, true>;
};

type WeaponSystemSchema = {
  isMasterwork: fieldsType.BooleanField<boolean, boolean, true, false, true>;
  weaponType: fieldsType.StringField<WeaponType, WeaponType, true, false, true>;
  weaponSubtype: fieldsType.StringField<WeaponSubtype, WeaponSubtype, true, false, true>;
  weaponBaseType: fieldsType.StringField<WeaponBaseType, WeaponBaseType, true, false, true>;
  weaponDamage: fieldsType.SchemaField<WeaponDamageSchema>;
  attackNotes: fieldsType.StringField<string, string, true, false, true>;
  damageNotes: fieldsType.StringField<string, string, true, false, true>;
};

class WeaponSystemModel extends ItemSystemModelBase {
  static override defineSchema() {
    const schema = super.defineSchema();
    applyPhysicalSchema(schema);
    
    schema.isMasterwork = requiredBooleanField(false),
    schema.weaponType = new StringField<WeaponType, WeaponType, true, false, true>({ choices: WEAPON_TYPES, initial: 'D35E.WeaponTypeSimple', required: true });
    schema.weaponSubtype = new StringField<WeaponSubtype, WeaponSubtype, true, false, true>({ choices: WEAPON_SUBTYPES, initial: 'D35E.WeaponPropLight', required: true });
    schema.weaponBaseType = new StringField<WeaponBaseType, WeaponBaseType, true, false, true>({ choices: WEAPOON_BASE_TYPES, initial: '', required: true, blank: true });
    schema.weaponDamage = new SchemaField<WeaponDamageSchema>({
      damageRoll: new StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
      damageType: new StringField<DamageType, DamageType, true, false, true>({ initial: 'D35E.DRSlashing', required: true, choices: DAMAGE_TYPES }),
      critRange: new StringField<string, string, true, false, true>({ initial: '20', required: true }),
      critMultiplier: new NumberField<number, number, true, false, true>({ initial: 2, required: true }),
      rangeIncrement: new NumberField<number, number, true, true, false>({ required: true }),
      attackFormula: new StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
      damageFormula: new StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  }),
    });
    schema.attackNotes = new StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  });
    schema.damageNotes = new StringField<string, string, true, false, true>({ initial: '', required: true, blank: true  });

    return schema;
  }
}


// class WeaponSystemModel<
//   TParent extends WeaponDnd35e = WeaponDnd35e,
//   TSchema extends WeaponSystemSchema = WeaponSystemSchema
// > extends PhysicalItemSystemModel<TParent, TSchema> {
//   // static override defineSchema (): WeaponSystemSchema {

//   // }
// };

export { WeaponSystemModel, type WeaponSystemSchema };
