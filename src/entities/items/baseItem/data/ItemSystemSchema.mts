import type { fields as fieldsType } from '@common/data/_module.mjs';
import type { abstract } from '@client/_module.mjs';
import type { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';


// Origin
type ItemOriginShemaBase = {
  originId: fieldsType.StringField<string, string, true, false, true>;
  originVersion: fieldsType.StringField<string, string, true, false, true>;
  originPack: fieldsType.StringField<string, string, true, false, true>;
};

type ItemOriginSchema = fieldsType.SchemaField<
  ItemOriginShemaBase,
  SourceFromSchema<ItemOriginShemaBase>,
  ModelPropsFromSchema<ItemOriginShemaBase>,
  false, true, false
>;

// Description
type ItemDescriptionSchemaBase = {
    value: fieldsType.HTMLField<string, string, true, false, true>;
    // chat: fields.StringField<string, string, false, false, true>;
};

type ItemDescriptionSchema = fieldsType.SchemaField<
  ItemDescriptionSchemaBase,
  SourceFromSchema<ItemDescriptionSchemaBase>,
  ModelPropsFromSchema<ItemDescriptionSchemaBase>,
  true, false, true
>;

// System
interface ItemSystemSchema extends abstract.DataSchema {
    version: fieldsType.StringField<string, string, true, false, true>;
    uniqueId: fieldsType.StringField<string, string, false, false, true>;
    origin: ItemOriginSchema;
    description: ItemDescriptionSchema;
    // Name
    isNameFromFormula: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    nameFormula: fieldsType.StringField<string, string, false, true, true>;

    isPsionic: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    isEpic: fieldsType.BooleanField<boolean, boolean, true, false, true>;
};

export type {
  ItemSystemSchema,
}