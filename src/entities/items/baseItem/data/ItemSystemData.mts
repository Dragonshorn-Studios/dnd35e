import { ItemSystemSource } from "./index.mjs";

// This is ItemSystemSource after going through the ItemSystemModel.prepareDerivedData() process
interface ItemSystemData extends ItemSystemSource {};

export type {
  ItemSystemData,
};