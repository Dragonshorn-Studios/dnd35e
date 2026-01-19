import { IdentifiableItemSystemData } from "@items/components/IdentifiableItem/index.mjs";
import { PhysicalSystemSource } from "./index.mjs";

type PhysicalSystemData = PhysicalSystemSource & IdentifiableItemSystemData;

export type {
  PhysicalSystemData,
};