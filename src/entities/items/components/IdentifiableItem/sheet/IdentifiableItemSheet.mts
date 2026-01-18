import { IdentifiableItem } from "../IdentifiableItem.mjs";
import { BaseItemSheetRenderContext, ItemSheetDnd35e } from "@items/baseItem/index.mjs";

interface IdentifiableItemSheetRenderContext extends BaseItemSheetRenderContext {
  document: IdentifiableItem;
};

abstract class IdentifiableItemSheet<TDocument extends IdentifiableItem> extends ItemSheetDnd35e<TDocument> {

}

export { IdentifiableItemSheet };
export type { IdentifiableItemSheetRenderContext };