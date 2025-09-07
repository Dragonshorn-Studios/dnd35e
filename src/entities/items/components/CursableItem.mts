import { fields } from '@common/data/_module.mjs';
import { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';
import { requiredBooleanField } from '@helpers/fieldBuilders.mjs';

type CursableItem = {
    cursedInfo?: {
        isCursed: boolean;
        isCurseActive: boolean;
    };
};

type CursableItemSchemaBase = {
    isCursed: fields.BooleanField;
    isCurseActive: fields.BooleanField;
    // cursedInfo?: fields.SchemaField<{
    //     unidentifiedName: fields.StringField<string, string, false, false, true>;
    //     unidentifiedDescription: fields.StringField<string, string, false, false, true>;
    //     unidentifiedPrice: fields.NumberField<number, number, true, true, false>;
    // }>;
};

type CursableItemSchema = {
    cursedInfo: fields.SchemaField<CursableItemSchemaBase, SourceFromSchema<CursableItemSchemaBase>, ModelPropsFromSchema<CursableItemSchemaBase>, false, true, false>;
}

const defineCursableSchema = (): CursableItemSchema => ({
  cursedInfo: new fields.SchemaField({
    isCursed: requiredBooleanField(),
    isCurseActive: requiredBooleanField(),
  }),
});

export { defineCursableSchema, type CursableItem, type CursableItemSchema };
