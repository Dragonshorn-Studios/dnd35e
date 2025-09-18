import type { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';
import { nullableOptionalStringField, optionalStringField, requiredBooleanField } from '@helpers/fieldBuilders.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';

const { fields } = foundry.data;

type IdentifiableItemInfoSchemaBase = {
    unidentifiedName: fieldsType.StringField<string, string, false, false, true>;
    unidentifiedDescription: fieldsType.HTMLField<string, string, false, false, true>;
    unidentifiedPrice: fieldsType.NumberField<number, number, true, true, false>;
    isIdentified: fieldsType.BooleanField;
    unidentifiedNameFormula?: fieldsType.StringField<string, string, false, true, true>;
    isUnidentifiedNameFromFormula: fieldsType.BooleanField<boolean, boolean, true, false, true>;
};

type IdentifiableItemSchema = {
    isIdentifiable: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    unidentifiedInfo?: fieldsType.SchemaField<
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
    unidentifiedDescription: new fields.HTMLField({ required: false, nullable: false, blank: true }),
    unidentifiedPrice: new fields.NumberField<number, number, true, true, false>({ required: true, nullable: true }),
    isIdentified: requiredBooleanField(false),
    unidentifiedNameFormula: nullableOptionalStringField(undefined),
    isUnidentifiedNameFromFormula: requiredBooleanField(false),
  }, { required: false, nullable: true }),
});

export {
  defineIdentifiableSchema,
  type IdentifiableItemSchema,
};
