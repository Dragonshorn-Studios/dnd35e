import { fields } from '@common/data/_module.mjs';
import { ItemSystemModel, ItemSystemSchema } from '@items/baseItem/index.mjs';
import { defineIdentifiableSchema, IdentifiableItemSchema } from '@items/components/IdentifiableItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import { requiredBooleanField, requiredNumberField } from '@helpers/fieldBuilders.mjs';

// Schema
type MaterialSystemSchema = ItemSystemSchema & IdentifiableItemSchema & {
  priceDifference: fields.NumberField<number, number, true, false, true>;
  magicEquivalent: fields.NumberField<number, number, true, false, true>;
  bonusHardness: fields.NumberField<number, number, true, false, true>;
  bonusHpPerInch: fields.NumberField<number, number, true, false, true>,
  isAlchemicalSilverEquivalent: fields.BooleanField,
  isAdamantineEquivalent: fields.BooleanField,
  isColdIronEquivalent: fields.BooleanField,
}

class MaterialSystemModel extends ItemSystemModel<MaterialDnd35e, MaterialSystemSchema> {
  static override defineSchema (): MaterialSystemSchema {
    return {
      ...super.defineSchema(),

      // components
      ...defineIdentifiableSchema(),

      priceDifference: requiredNumberField(0),
      magicEquivalent: requiredNumberField(0),
      bonusHardness: requiredNumberField(0),
      bonusHpPerInch: requiredNumberField(0),
      isAlchemicalSilverEquivalent: requiredBooleanField(false),
      isAdamantineEquivalent: requiredBooleanField(false),
      isColdIronEquivalent: requiredBooleanField(false),
    };
  }
}

export { MaterialSystemModel, type MaterialSystemSchema };
