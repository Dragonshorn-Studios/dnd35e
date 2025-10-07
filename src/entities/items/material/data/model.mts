import { ItemSystemModel, ItemSystemSchema } from '@items/baseItem/index.mjs';
import { IdentifiableItemSchema, IdentifiableItemSystemModelMixin } from '@items/components/IdentifiableItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import { requiredBooleanField, requiredNumberField } from '@helpers/fieldBuilders.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';

type MaterialSystemSchema = IdentifiableItemSchema<
  ItemSystemSchema,
  MaterialDnd35e,
  typeof ItemSystemModel<MaterialDnd35e, ItemSystemSchema>
> & {
  priceDifference: fieldsType.NumberField<number, number, true, false, true>;
  magicEquivalent: fieldsType.NumberField<number, number, true, false, true>;
  bonusHardness: fieldsType.NumberField<number, number, true, false, true>;
  bonusHpPerInch: fieldsType.NumberField<number, number, true, false, true>,
  isAlchemicalSilverEquivalent: fieldsType.BooleanField,
  isAdamantineEquivalent: fieldsType.BooleanField,
  isColdIronEquivalent: fieldsType.BooleanField,
};

class MaterialSystemModel extends IdentifiableItemSystemModelMixin<
  ItemSystemSchema,
  MaterialDnd35e,
  AbstractConstructorOf<ItemSystemModel<MaterialDnd35e, ItemSystemSchema>>
    & typeof ItemSystemModel<MaterialDnd35e, ItemSystemSchema>
>(ItemSystemModel<MaterialDnd35e, ItemSystemSchema>) {
  static override defineSchema ()  {
    const superSchema = super.defineSchema();
    return {
      ...superSchema,
      priceDifference: requiredNumberField(0),
      magicEquivalent: requiredNumberField(0),
      bonusHardness: requiredNumberField(0),
      bonusHpPerInch: requiredNumberField(0),
      isAlchemicalSilverEquivalent: requiredBooleanField(false),
      isAdamantineEquivalent: requiredBooleanField(false),
      isColdIronEquivalent: requiredBooleanField(false),
    } satisfies MaterialSystemSchema;
  }
}

export { MaterialSystemModel, type MaterialSystemSchema };
