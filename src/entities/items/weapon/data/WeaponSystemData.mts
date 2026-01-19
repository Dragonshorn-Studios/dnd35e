import { ItemSystemData } from "@items/baseItem/index.mjs";
import { WeaponSystemSource } from "./index.mjs";
import { PhysicalSystemData } from "@items/components/physical/index.mjs";

type WeaponSystemData = WeaponSystemSource
  & ItemSystemData
  & PhysicalSystemData
  //& EquippableItem;

export type {
  WeaponSystemSource,
  WeaponSystemData,
};
