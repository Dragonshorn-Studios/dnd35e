import { applyDamagableRuntime } from "@items/components/Damagable/data/applyDamagableRuntime.mjs";
import { applyIdentifiableRuntime } from "@items/components/IdentifiableItem/data/applyIdentifiableRuntime.mjs";

const applyPhysicalRuntime = (item: { system: any }) => {
  applyIdentifiableRuntime(item);
  applyDamagableRuntime(item);
};

export { applyPhysicalRuntime };
