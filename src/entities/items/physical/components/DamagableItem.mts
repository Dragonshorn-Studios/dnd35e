import { fields } from '@common/data/_module.mjs';
import { requiredNumberField } from '@helpers/fieldBuilders.mjs';

type DamagableItem = {
    hp: {
        value: number;
        max: number;
    };
    hardness: number;
};

type DamagableItemSchema = {
    hp: fields.SchemaField<{
        value: fields.NumberField<number, number, true, false, true>;
        max: fields.NumberField<number, number, true, false, true>;
    }>,
    hardness: fields.NumberField<number, number, true, false, true>;
};

const defineDamagableItemSchema = (): DamagableItemSchema => ({
  hp: new fields.SchemaField({
    value: requiredNumberField(0),
    max: requiredNumberField(0),
  }),
  hardness: requiredNumberField(0),
});

export { defineDamagableItemSchema, type DamagableItem, type DamagableItemSchema };
