import { fields } from '@common/data/_module.mjs';
import { PhysicalItemDnd35e } from '../PhysicalItemDnd35e.mjs';
import { ItemSystemModel, ItemSystemSchema } from '@items/baseItem/index.mjs';
import { defineIdentifiableSchema, IdentifiableItemSchema } from '@items/components/IdentifiableItem/index.mjs';
import { CursableItemSchema, defineCursableSchema } from '@items/components/CursableItem.mjs';
import { DamagableItemSchema, defineDamagableItemSchema } from '../components/DamagableItem.mjs';
import { ChangesPropertySetSchema, defineChangesSchema } from '@items/components/Changes.mjs';
import { AlignmentSchema, defineAlignmentSchema } from '@items/components/Alignment.mjs';
import { optionalNumberField, optionalStringField, requiredBooleanField, requiredNumberField } from '@helpers/fieldBuilders.mjs';
import { Size, SIZES } from '@constants/sizes.mjs';

// Schema
type PhysicalItemSystemSchema = ItemSystemSchema
    & IdentifiableItemSchema
    & CursableItemSchema
    & DamagableItemSchema
    & ChangesPropertySetSchema
    & AlignmentSchema
& {
    quantity: fields.NumberField<number, number, true, false, true>;
    weight: fields.NumberField;
    isWeightlessWhenCarried: fields.BooleanField;
    isWeightlessInContainer: fields.BooleanField;
    isCarried: fields.BooleanField;
    size: fields.StringField<Size, Size, true, false, true>;

    // Price
    price: fields.NumberField<number, number, true, false, true>;
    resalePrice: fields.NumberField;
    brokenResalePrice: fields.NumberField;
    isFullResalePrice: fields.BooleanField;

    // Container
    containerId: fields.StringField<string, string, false, false, true>;
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
