
import { identifiableHeaderPartialName, IdentifiableItemRenderContext } from '@items/components/IdentifiableItem/index.mjs';
import { PhysicalItemDnd35e } from '../PhysicalItemDnd35e.mjs';
import { ItemSheetDnd35e, ItemSheetDnd35eConfig, ItemSheetDnd35eRenderContext, ItemSheetPartialsList } from '@items/baseItem/index.mjs';
import { IdentifiableItemPartialsList, prepareIdentifiableContext } from '@items/components/IdentifiableItem/sheet.mjs';

type PhysicalItemSheetConfig<TItem extends PhysicalItemDnd35e> = ItemSheetDnd35eConfig<TItem> & {
  // Add any additional properties needed for the physical item sheet context here
};

type PhysicalItemSheetPartialsList = ItemSheetPartialsList & IdentifiableItemPartialsList;

interface PhysicalItemSheetRenderContext extends ItemSheetDnd35eRenderContext, IdentifiableItemRenderContext {
  partials: PhysicalItemSheetPartialsList;
};

abstract class PhysicalItemSheet<
  TDocument extends PhysicalItemDnd35e = PhysicalItemDnd35e,
  TContext extends PhysicalItemSheetConfig<TDocument> = PhysicalItemSheetConfig<TDocument>
> extends ItemSheetDnd35e<TDocument, TContext> {
  // static override PARTS = {
  //   header: IdentifiableHeaderPart,
  // };

  protected override async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<PhysicalItemSheetRenderContext> {
    const startingContext: ItemSheetDnd35eRenderContext = await super._prepareContext(options);
    const identifiedContext: IdentifiableItemRenderContext = prepareIdentifiableContext(this.document.system);
    const contextExport: PhysicalItemSheetRenderContext = foundry.utils.mergeObject(startingContext, identifiedContext);
    return contextExport;
    // return {
    //   ...startingContext,
    //   ...identifiedContext,
    //   partials: {
    //     ...startingContext.partials,
    //     ...identifiedContext.partials,
    //     headerMain: identifiableHeaderPartialName,
    //   },
    // };
  }
}

export { PhysicalItemSheet };
export type {
  PhysicalItemSheetConfig,
  PhysicalItemSheetRenderContext,
  PhysicalItemSheetPartialsList,
};
