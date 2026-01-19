import { applyDamagableSchema } from "@items/components/Damagable/data/applyDamagableSchema.mjs";
import { applyIdentifiableSchema } from "@items/components/IdentifiableItem/data/applyIdentifiableSchema.mjs";

const applyPhysicalSchema = (schema: Record<string, any>) => {
  applyIdentifiableSchema(schema);
  applyDamagableSchema(schema);
};

export { applyPhysicalSchema };