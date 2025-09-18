import { ItemSheetContextEnrichedTexts, ItemSheetDnd35e, ItemSheetDnd35eConfig, ItemSheetDnd35eRenderContext, ItemSheetPartialsList } from '@items/baseItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import { identifiableBannerPartialName, identifiableDescriptionPartialName, IdentifiableItemPartialsList, IdentifiableItemRenderContext, identifiableNameConfigPartialName } from '@items/components/IdentifiableItem/index.mjs';
import { type DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import type { HandlebarsTemplatePart } from '@client/applications/api/handlebars-application.mjs';
import { IdentifiableItemContextEnrichedTexts, prepareIdentifiableContext } from '@items/components/IdentifiableItem/sheet.mjs';

type MaterialSheetConfig<TItem extends MaterialDnd35e = MaterialDnd35e> = ItemSheetDnd35eConfig<TItem>;

type MaterialSheetPartialsList = ItemSheetPartialsList & IdentifiableItemPartialsList;

type MaterialSheetContextEnrichedTexts = ItemSheetContextEnrichedTexts & IdentifiableItemContextEnrichedTexts;

interface MaterialSheetRenderContext extends ItemSheetDnd35eRenderContext, IdentifiableItemRenderContext {
  partials: MaterialSheetPartialsList;
  enrichedTexts: MaterialSheetContextEnrichedTexts;
};

const materialDetailsPartialName = 'materialDetails';

class MaterialSheet extends foundry.applications.api.HandlebarsApplicationMixin(ItemSheetDnd35e<MaterialDnd35e, MaterialSheetConfig>) {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    id: 'dnd35e-material-sheet', // this probably should be unique
    tag: 'form',
    form: {
      submitOnChange: true,
    },
    window: {
      resizable: true,
    },
  }

  declare showUnIdentifiedDescriptionEditor: boolean;

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
    const baseParts = ItemSheetDnd35e.PARTS;
    return {
      top: baseParts['top'],
      // banner: { template: identifiableBannerPartialName },
      tabs: baseParts['tabs'],
      namesetup: { template: identifiableNameConfigPartialName, scrollable: [''], },
      description: { template: identifiableDescriptionPartialName, scrollable: [''], },
      details: { template: materialDetailsPartialName, scrollable: [''], },
    }
  }

  protected override async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<MaterialSheetRenderContext> {
    const startingContext = await super._prepareContext(options) as ItemSheetDnd35eRenderContext;
    const identifiedContext: IdentifiableItemRenderContext = prepareIdentifiableContext(this.document.system, {
      editable: startingContext.editable,
    });
    const contextExport: MaterialSheetRenderContext = foundry.utils.mergeObject(startingContext, identifiedContext);
    
    contextExport.itemType = 'TYPES.Item.material';
    return contextExport;
  }

  protected async _preparePartContext(partId: string, context: MaterialSheetRenderContext) {
    switch (partId) {
      case 'namesetup':
      case 'description':
      case 'details':
        context.tab = context.tabs?.[partId];
        // this.tabGroups['primary'] === partId;
        break;
      default:
    }
    return context;
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
