import { fields } from '@common/data/_module.mjs';
import { ItemDnd35e } from '../ItemDnd35e.mjs';
import { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';
import { nullableOptionalStringField, optionalStringField, requiredBooleanField, requiredStringField } from '@helpers/fieldBuilders.mjs';
import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';

// Schema
// Origin
type ItemOriginShemaBase = {
    originId: fields.StringField<string, string, true, false, true>;
    originVersion: fields.StringField<string, string, true, false, true>;
    originPack: fields.StringField<string, string, true, false, true>;
};

type ItemOriginSchema = fields.SchemaField<ItemOriginShemaBase, SourceFromSchema<ItemOriginShemaBase>, ModelPropsFromSchema<ItemOriginShemaBase>, false, true, false>;

// Description
type ItemDescriptionSchemaBase = {
    value: fields.StringField<string, string, true, false, true>;
    // chat: fields.StringField<string, string, false, false, true>;
};

type ItemDescriptionSchema = fields.SchemaField<
    ItemDescriptionSchemaBase,
    SourceFromSchema<ItemDescriptionSchemaBase>,
    ModelPropsFromSchema<ItemDescriptionSchemaBase>,
    true, false, true
>;

// System
type ItemSystemSchema = {
    version: fields.StringField<string, string, true, false, true>;
    uniqueId?: fields.StringField<string, string, false, false, true>;
    origin: ItemOriginSchema;
    description: ItemDescriptionSchema;
    // Name
    isNameFromFormula: fields.BooleanField<boolean, boolean, true, false, true>;
    nameFormula: fields.StringField<string, string, false, true, true>;

    isPsionic: fields.BooleanField<boolean, boolean, true, false, true>;
    isEpic: fields.BooleanField<boolean, boolean, true, false, true>;
};

// Model
abstract class ItemSystemModel<
  TParent extends ItemDnd35e = ItemDnd35e,
  TSchema extends ItemSystemSchema = ItemSystemSchema,
> extends foundry.abstract.TypeDataModel<TParent, TSchema> {
  static override defineSchema (): ItemSystemSchema {
    return {
      // components

      // System Base
      version: requiredStringField('1.0.0'),
      uniqueId: optionalStringField(),

      origin: new fields.SchemaField({
        originId: requiredStringField(),
        originVersion: requiredStringField(),
        originPack: requiredStringField(),
      }),

      nameFormula: nullableOptionalStringField(),
      isNameFromFormula: requiredBooleanField(false),
      description: new fields.SchemaField({
        value: requiredStringField(),
      }),

      isPsionic: requiredBooleanField(),
      isEpic: requiredBooleanField(),
    };
  }

  get actor (): ActorDnd35e | null {
    return this.parent?.actor ?? null;
  }
}

// Export
export { ItemSystemModel };
export type {
  ItemSystemSchema,
};
