import { fields } from '@common/data/_module.mjs';
import { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';
import { nullableOptionalStringField, optionalStringField, requiredBooleanField } from '@helpers/fieldBuilders.mjs';

type IdentifiableItemInfoSchemaBase = {
    unidentifiedName: fields.StringField<string, string, false, false, true>;
    unidentifiedDescription: fields.StringField<string, string, false, false, true>;
    unidentifiedPrice: fields.NumberField<number, number, true, true, false>;
    isIdentified: fields.BooleanField;
    unidentifiedNameFormula?: fields.StringField<string, string, false, true, true>;
    usesUnidentifiedNameFormula: fields.BooleanField<boolean, boolean, true, false, true>;
};

type IdentifiableItemSchema = {
    isIdentifiable: fields.BooleanField<boolean, boolean, true, false, true>;
    unidentifiedInfo?: fields.SchemaField<
        IdentifiableItemInfoSchemaBase,
        SourceFromSchema<IdentifiableItemInfoSchemaBase>,
        ModelPropsFromSchema<IdentifiableItemInfoSchemaBase>,
        false, true, false
    >;
};

const defineIdentifiableSchema = (): IdentifiableItemSchema => ({
  isIdentifiable: requiredBooleanField(false),
  unidentifiedInfo: new fields.SchemaField({
    unidentifiedName: optionalStringField(),
    unidentifiedDescription: optionalStringField(),
    unidentifiedPrice: new fields.NumberField<number, number, true, true, false>({ required: true, nullable: true }),
    isIdentified: requiredBooleanField(false),
    unidentifiedNameFormula: nullableOptionalStringField(undefined),
    usesUnidentifiedNameFormula: requiredBooleanField(false),
  }, { required: false, nullable: true }),
});

export {
  defineIdentifiableSchema,
  type IdentifiableItemSchema,
};
