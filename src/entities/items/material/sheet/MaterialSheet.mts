import { ItemSheetDnd35e, ItemSheetDnd35eConfig, ItemSheetDnd35eRenderContext, ItemSheetPartialsList } from '@items/baseItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import { IdentifiableItemRenderContext } from '@items/components/IdentifiableItem/index.mjs';
import { IdentifiableItemPartialsList, prepareIdentifiableContext } from '@items/components/IdentifiableItem/sheet.mjs';
import { type DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import { systemPath } from '@constants/paths.mjs';
import type { HandlebarsTemplatePart } from '@client/applications/api/handlebars-application.mjs';

type MaterialSheetConfig<TItem extends MaterialDnd35e = MaterialDnd35e> = ItemSheetDnd35eConfig<TItem>;

type MaterialSheetPartialsList = ItemSheetPartialsList & IdentifiableItemPartialsList;

interface MaterialSheetRenderContext extends ItemSheetDnd35eRenderContext, IdentifiableItemRenderContext {
  partials: MaterialSheetPartialsList;
};

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
    position: {
      width: 600,
      height: 400,
    },
  }

  static override get PARTS(): Record<string, HandlebarsTemplatePart> {
    const old = ItemSheetDnd35e.PARTS;
    return {
      ...old,
      main: {
        template: `${systemPath}src/entities/items/material/sheet/MaterialSheet.hbs`,
        // root: true,
      },
    }
  }

  protected override async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<MaterialSheetRenderContext> {
    const startingContext = await super._prepareContext(options) as ItemSheetDnd35eRenderContext;
    const identifiedContext: IdentifiableItemRenderContext = prepareIdentifiableContext(this.document.system);
    const contextExport: MaterialSheetRenderContext = foundry.utils.mergeObject(startingContext, identifiedContext);
    
    contextExport.itemType = 'D35E.Material';
    return contextExport;
  }
}

export { MaterialSheet };

export type {
  MaterialSheetConfig,
  MaterialSheetPartialsList,
  MaterialSheetRenderContext,
};
