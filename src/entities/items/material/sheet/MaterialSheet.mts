import {
  ItemSheetContextEnrichedTexts,
  HandleBarsItemSheetMixin,
  ItemSheetDnd35eConfig,
  ItemSheetDnd35eRenderContext,
  ItemSheetPartialsList,
  ItemDnd35e,
} from '@items/baseItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import {
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
} from '@items/components/IdentifiableItem/index.mjs';
import { type DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import type { HandlebarsTemplatePart } from '@client/applications/api/handlebars-application.mjs';

type MaterialSheetConfig = ItemSheetDnd35eConfig<MaterialDnd35e>;

type MaterialSheetPartialsList = ItemSheetPartialsList;

type MaterialSheetContextEnrichedTexts = ItemSheetContextEnrichedTexts & {};

interface MaterialSheetRenderContext extends ItemSheetDnd35eRenderContext {
  partials: MaterialSheetPartialsList;
  enrichedTexts: MaterialSheetContextEnrichedTexts;
};

const materialDetailsPartialName = 'materialDetails';

class MaterialSheet extends HandleBarsItemSheetMixin<null, ItemDnd35e<null>>() {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
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

  protected override async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<MaterialSheetRenderContext> {
    const startingContext = await super._prepareContext(options);
    const contextExport: MaterialSheetRenderContext = {
      ...startingContext,
      itemType: 'TYPES.Item.material',
    };
    
    return contextExport;
  }

  protected override async _preparePartContext(partId: string, context: MaterialSheetRenderContext) {
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
