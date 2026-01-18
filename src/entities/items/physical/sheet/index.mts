import { IdentifiableItemSheetRenderContext } from "@items/IdentifiableItem/index.mjs";
import { PhysicalItemDnd35e } from "../PhysicalItemDnd35e.mjs";
import PhysicalItemSheet from "./PhysicalItemSheet.vue";

export { usePhysicalItemStore } from "./PhysicalItemStore.mjs";
export {
  PhysicalItemSheet,
};

export type { PhysicalItemSheetStore } from "./PhysicalItemStore.mjs";
export type PhysicalItemSheetRenderContext = IdentifiableItemSheetRenderContext & {
  document: PhysicalItemDnd35e;
}