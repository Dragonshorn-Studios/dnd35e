import { IdentifiableItem, IdentifiableItemLike } from "../IdentifiableItem.mjs";
import { BaseItemSheetRenderContext, ItemSheetDnd35e } from "@items/baseItem/index.mjs";

type IdentifiableItemSheetRenderContext = BaseItemSheetRenderContext & {
  document: IdentifiableItem;
};

abstract class IdentifiableItemSheet<TDocument extends IdentifiableItemLike> extends ItemSheetDnd35e<TDocument> {

}

export { IdentifiableItemSheet };
export type { IdentifiableItemSheetRenderContext };