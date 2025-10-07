import {
  ItemSheetContextEnrichedTexts,
  ItemSheetDnd35eConfig,
  ItemSheetDnd35eRenderContext,
  ItemSheetPartialsList,
} from '@items/baseItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import {
  identifiableDescriptionPartialName,
  IdentifiableItemSheetMixin,
  identifiableNameConfigPartialName,
} from '@items/components/IdentifiableItem/index.mjs';
import type { HandlebarsTemplatePart } from '@client/applications/api/handlebars-application.mjs';
import { IdentifiableItemRenderContext, RequiredIdentifiableBase } from '@items/components/IdentifiableItem/sheet/IdentifiableItemSheet.mjs';
import { DeepMerge } from '@source/types.mjs';

type MaterialSheetConfig = ItemSheetDnd35eConfig<MaterialDnd35e>;

type MaterialSheetPartialsList = ItemSheetPartialsList;

type MaterialSheetContextEnrichedTexts = ItemSheetContextEnrichedTexts & {};

type MaterialSheetRenderContext<TBase extends IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>>
  = DeepMerge<{
  partials: MaterialSheetPartialsList;
  enrichedTexts: MaterialSheetContextEnrichedTexts;
}, TBase>;


const materialDetailsPartialName = 'materialDetails';

type MaterialSheetRenderContextBase = DeepMerge<
  {
    partials: MaterialSheetPartialsList;
    enrichedTexts: MaterialSheetContextEnrichedTexts;
  },
  Awaited<ReturnType<InstanceType<ReturnType<typeof IdentifiableItemSheetMixin>>['_prepareContext']>>
>

type MaterialSheetRenderPartContext<TBase extends IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>> = MaterialSheetRenderContext<TBase> & {
};

class MaterialSheet extends IdentifiableItemSheetMixin(RequiredIdentifiableBase) {
  static override DEFAULT_OPTIONS: DeepPartial<MaterialSheetConfig> = {
    id: 'dnd35e-material-sheet', // this probably should be unique
  }

  // declare showUnIdentifiedDescriptionEditor: boolean;

  static override get TABS() {
    const baseTabs = super.TABS;
    baseTabs.primary.tabs.push({
        id: 'details',
        label: 'D35E.Details',
        // icon: 'fas fa-th-list',
    })
    return {
      ...baseTabs,
    };
  }

  static override get PARTS(): Record<string, HandlebarsTemplatePart> {
    const baseParts = super.PARTS;
    return {
      ...baseParts,
      namesetup: { template: identifiableNameConfigPartialName, scrollable: [''], },
      description: { template: identifiableDescriptionPartialName, scrollable: [''], },
      details: { template: materialDetailsPartialName, scrollable: [''], },
    }
  }

  protected override async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<MaterialSheetRenderContext<IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>>> {
    const startingContext = await super._prepareContext(options) as IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>;
    const contextExport = {
      ...startingContext,
      itemType: 'TYPES.Item.material',
    } satisfies MaterialSheetRenderContext<IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>>;
    
    return contextExport;
  }

  protected override async _preparePartContext(partId: string, context: MaterialSheetRenderContext<IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>>): Promise<MaterialSheetRenderPartContext<IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>>> {
    switch (partId) {
      case 'namesetup':
      case 'description':
      case 'details':
        context.tab = context.tabs?.[partId];
        // this.tabGroups['primary'] === partId;
        break;
      default:
    }
    return context satisfies MaterialSheetRenderPartContext<IdentifiableItemRenderContext<ItemSheetDnd35eRenderContext>>;
  }
}

export {
  MaterialSheet,
  materialDetailsPartialName,
};

export type {
  MaterialSheetConfig,
  MaterialSheetPartialsList,
  MaterialSheetRenderContext,
};
