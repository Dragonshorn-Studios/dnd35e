import {
  ItemSheetContextEnrichedTexts,
  ItemSheetDnd35eConfig,
  ItemSheetDnd35eRenderContext,
  ItemSheetPartialsList,
  HandleBarsItemSheetBase,
  ItemDnd35e
} from '@items/baseItem/index.mjs';
import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';
import { PhysicalItemMixin } from '../PhysicalItemDnd35e.mjs';

// type PhysicalItemSheetConfig<TItem extends PhysicalItemDnd35e> = ItemSheetDnd35eConfig<TItem> & {
//   // Add any additional properties needed for the physical item sheet context here
// };

type PhysicalItemSheetPartialsList = ItemSheetPartialsList;

type PhysicalItemSheetContextEnrichedTexts = ItemSheetContextEnrichedTexts;

interface PhysicalItemSheetRenderContext extends ItemSheetDnd35eRenderContext {
  partials: PhysicalItemSheetPartialsList;
  enrichedTexts: PhysicalItemSheetContextEnrichedTexts;
};

function PhysicalItemSheetMixin<
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
  TDoc extends InstanceType<ReturnType<typeof PhysicalItemMixin<TParent, ConstructorOf<ItemDnd35e<TParent>>>>>
    = InstanceType<ReturnType<typeof PhysicalItemMixin<TParent, ConstructorOf<ItemDnd35e<TParent>>>>>,
  TConfig extends ItemSheetDnd35eConfig<TDoc> = ItemSheetDnd35eConfig<TDoc>,
  TBase extends HandleBarsItemSheetBase<TParent, TDoc, TConfig> = HandleBarsItemSheetBase<TParent, TDoc, TConfig>
>(Base: TBase) {
  abstract class PhysicalItemSheet extends Base {
    constructor(...args: any[]) {
      super(...args as any);
    }
  };

  return PhysicalItemSheet;
}

export { PhysicalItemSheetMixin };
export type {
  // PhysicalItemSheetConfig,
  PhysicalItemSheetRenderContext,
  PhysicalItemSheetPartialsList,
  PhysicalItemSheetContextEnrichedTexts,
};
