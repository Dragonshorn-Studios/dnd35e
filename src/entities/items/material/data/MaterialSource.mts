import { MaterialSystemSource } from "./index.mjs";
import { IdentifiableItemSource } from "@items/components/IdentifiableItem/index.mjs";

type MaterialSource = Omit<IdentifiableItemSource<'material'>, "system"> & {
  system: MaterialSystemSource;
};

export type { MaterialSource };
