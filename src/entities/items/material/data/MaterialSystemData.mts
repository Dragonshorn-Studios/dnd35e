import { IdentifiableItemSystemData } from "@items/components/IdentifiableItem/index.mjs";
import { MaterialSystemSource } from "./index.mjs";
import { ItemSystemData } from "@items/baseItem/index.mjs";

interface MaterialSystemData extends MaterialSystemSource, IdentifiableItemSystemData, ItemSystemData {};

export { MaterialSystemData };
