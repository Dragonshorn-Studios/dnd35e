import { DamagableItemSystemData } from './data/index.mjs';

interface DamagableItem {
  system: DamagableItemSystemData;
  // isBroken(): boolean;
}

// type DamagableItemSchema = {
//     hp: fieldsType.SchemaField<{
//         value: fieldsType.NumberField<number, number, true, false, true>;
//         max: fieldsType.NumberField<number, number, true, false, true>;
//     }>,
//     hardness: fieldsType.NumberField<number, number, true, false, true>;
// };

export type { DamagableItem };
