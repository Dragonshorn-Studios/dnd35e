import { PhysicalItemDnd35e } from '../PhysicalItemDnd35e.mjs';
import { ItemSystemModel, ItemSystemSchema } from '@items/baseItem/index.mjs';
import { defineIdentifiableSchema, IdentifiableItemSchema } from '@items/components/IdentifiableItem/index.mjs';
import { CursableItemSchema, defineCursableSchema } from '@items/components/CursableItem.mjs';
import { DamagableItemSchema, defineDamagableItemSchema } from '../components/DamagableItem.mjs';
import { ChangesPropertySetSchema, defineChangesSchema } from '@items/components/Changes.mjs';
import { AlignmentSchema, defineAlignmentSchema } from '@items/components/Alignment.mjs';
import { optionalNumberField, optionalStringField, requiredBooleanField, requiredNumberField } from '@helpers/fieldBuilders.mjs';
import { Size, SIZES } from '@constants/sizes.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';

const { fields } = foundry.data;

// Schema
type PhysicalItemSystemSchema = ItemSystemSchema
    & IdentifiableItemSchema
    & CursableItemSchema
    & DamagableItemSchema
    & ChangesPropertySetSchema
    & AlignmentSchema
& {
    quantity: fieldsType.NumberField<number, number, true, false, true>;
    weight: fieldsType.NumberField;
    isWeightlessWhenCarried: fieldsType.BooleanField;
    isWeightlessInContainer: fieldsType.BooleanField;
    isCarried: fieldsType.BooleanField;
    size: fieldsType.StringField<Size, Size, true, false, true>;

    // Price
    price: fieldsType.NumberField<number, number, true, false, true>;
    resalePrice: fieldsType.NumberField;
    brokenResalePrice: fieldsType.NumberField;
    isFullResalePrice: fieldsType.BooleanField;

    // Container
    containerId: fieldsType.StringField<string, string, false, false, true>;
}

abstract class PhysicalItemSystemModel<
    TParent extends PhysicalItemDnd35e = PhysicalItemDnd35e,
    TSchema extends PhysicalItemSystemSchema = PhysicalItemSystemSchema
> extends ItemSystemModel<TParent, TSchema> {
  static override defineSchema (): PhysicalItemSystemSchema {
    return {
      ...super.defineSchema(),

      // components
      ...defineIdentifiableSchema(),

      ...defineCursableSchema(),
      ...defineDamagableItemSchema(),
      ...defineChangesSchema(),
      ...defineAlignmentSchema(),

      // Physical
      quantity: requiredNumberField(0),
      weight: optionalNumberField(),
      isWeightlessInContainer: requiredBooleanField(false),
      isWeightlessWhenCarried: requiredBooleanField(false),
      isCarried: requiredBooleanField(true),
      size: new fields.StringField<Size, Size, true, false, true>({ choices: SIZES, initial: 'tiny', required: true }),

      // Price
      price: requiredNumberField(0),
      resalePrice: optionalNumberField(),
      brokenResalePrice: optionalNumberField(),
      isFullResalePrice: requiredBooleanField(true),

      // Container
      containerId: optionalStringField(),
    };
  }
}

export { PhysicalItemSystemModel, type PhysicalItemSystemSchema };
