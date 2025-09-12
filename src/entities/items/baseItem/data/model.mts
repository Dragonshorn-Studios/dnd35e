
import { ItemDnd35e } from '../ItemDnd35e.mjs';
import type { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';
import { nullableOptionalStringField, optionalStringField, requiredBooleanField, requiredStringField } from '@helpers/fieldBuilders.mjs';
import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';
const { fields } = foundry.data;
// Schema
// Origin
type ItemOriginShemaBase = {
    originId: fieldsType.StringField<string, string, true, false, true>;
    originVersion: fieldsType.StringField<string, string, true, false, true>;
    originPack: fieldsType.StringField<string, string, true, false, true>;
};

type ItemOriginSchema = fieldsType.SchemaField<ItemOriginShemaBase, SourceFromSchema<ItemOriginShemaBase>, ModelPropsFromSchema<ItemOriginShemaBase>, false, true, false>;

// Description
type ItemDescriptionSchemaBase = {
    value: fieldsType.StringField<string, string, true, false, true>;
    // chat: fields.StringField<string, string, false, false, true>;
};

type ItemDescriptionSchema = fieldsType.SchemaField<
    ItemDescriptionSchemaBase,
    SourceFromSchema<ItemDescriptionSchemaBase>,
    ModelPropsFromSchema<ItemDescriptionSchemaBase>,
    true, false, true
>;

// System
type ItemSystemSchema = {
    version: fieldsType.StringField<string, string, true, false, true>;
    uniqueId?: fieldsType.StringField<string, string, false, false, true>;
    origin: ItemOriginSchema;
    description: ItemDescriptionSchema;
    // Name
    isNameFromFormula: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    nameFormula: fieldsType.StringField<string, string, false, true, true>;

    isPsionic: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    isEpic: fieldsType.BooleanField<boolean, boolean, true, false, true>;
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
