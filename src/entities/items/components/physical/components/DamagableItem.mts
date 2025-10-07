import { requiredNumberField } from '@helpers/fieldBuilders.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';

const { fields } = foundry.data;

type DamagableItem = {
    hp: {
        value: number;
        max: number;
    };
    hardness: number;
};

type DamagableItemSchema = {
    hp: fieldsType.SchemaField<{
        value: fieldsType.NumberField<number, number, true, false, true>;
        max: fieldsType.NumberField<number, number, true, false, true>;
    }>,
    hardness: fieldsType.NumberField<number, number, true, false, true>;
};

const defineDamagableItemSchema = (): DamagableItemSchema => ({
  hp: new fields.SchemaField({
    value: requiredNumberField(0),
    max: requiredNumberField(0),
  }),
  hardness: requiredNumberField(0),
});

export { defineDamagableItemSchema, type DamagableItem, type DamagableItemSchema };
