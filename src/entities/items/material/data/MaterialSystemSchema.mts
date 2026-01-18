import type { fields as fieldsType } from '@common/data/_module.mjs';
import { IdentifiableItemSchema } from '@items/components/IdentifiableItem/index.mjs';

type MaterialSystemSchema = IdentifiableItemSchema & {
  priceDifference: fieldsType.NumberField<number, number, true, false, true>;
  magicEquivalent: fieldsType.NumberField<number, number, true, false, true>;
  bonusHardness: fieldsType.NumberField<number, number, true, false, true>;
  bonusHpPerInch: fieldsType.NumberField<number, number, true, false, true>,
  isAlchemicalSilverEquivalent: fieldsType.BooleanField,
  isAdamantineEquivalent: fieldsType.BooleanField,
  isColdIronEquivalent: fieldsType.BooleanField,
}

export type { MaterialSystemSchema };