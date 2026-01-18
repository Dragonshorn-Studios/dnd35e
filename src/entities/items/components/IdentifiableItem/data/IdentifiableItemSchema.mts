import type { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';
import type {
  NullableOptionalStringField,
  OptionalHtmlField,
  OptionalStringField,
  RequiredBoolField,
  RequiredNullableNumberField
} from '@helpers/fieldBuilders.mjs';
import { ItemSystemSchema } from '@items/baseItem/index.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';

type IdentifiableItemInfoSchemaBase = {
    unidentifiedName: OptionalStringField;
    unidentifiedDescription: OptionalHtmlField;
    unidentifiedPrice: RequiredNullableNumberField;
    isIdentified: fieldsType.BooleanField;
    unidentifiedNameFormula?: NullableOptionalStringField;
    isUnidentifiedNameFromFormula: RequiredBoolField;
};

type IdentifiableInfoSource = SourceFromSchema<IdentifiableItemInfoSchemaBase>;
type IdentifiableInfoModel = ModelPropsFromSchema<IdentifiableItemInfoSchemaBase>;

type IdentifiableItemSchema = ItemSystemSchema & {
    isIdentifiable: RequiredBoolField;
    unidentifiedInfo?: fieldsType.SchemaField<
        IdentifiableItemInfoSchemaBase,
        IdentifiableInfoSource,
        IdentifiableInfoModel,
        false, true, false
    >;
};

export type {
  IdentifiableItemSchema,
};
