import { ItemSheetDnd35e, ItemSheetDnd35eConfig, ItemSheetDnd35eRenderContext, ItemSheetPartialsList } from '@items/baseItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import { IdentifiableItemRenderContext } from '@items/components/IdentifiableItem/index.mjs';
import { prepareIdentifiableContext } from '@items/components/IdentifiableItem/sheet.mjs';
import HandlebarsApplicationMixin from '@client/applications/api/handlebars-application.mjs';
import { DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';

type MaterialSheetConfig<TItem extends MaterialDnd35e = MaterialDnd35e> = ItemSheetDnd35eConfig<TItem>;

type MaterialSheetPartialsList = ItemSheetPartialsList;

interface MaterialSheetRenderContext extends ItemSheetDnd35eRenderContext, IdentifiableItemRenderContext {
  partials: MaterialSheetPartialsList;
};

class MaterialSheet extends HandlebarsApplicationMixin(ItemSheetDnd35e<MaterialDnd35e, MaterialSheetConfig>) {
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
  };

  static override PARTS = {
    ...super.PARTS,
    // main: {
    //   template: `${systemPath}src/entities/items/weaponSheet.hbs`,
    // },
  };

  protected override async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<MaterialSheetRenderContext> {
    const startingContext = await super._prepareContext(options) as ItemSheetDnd35eRenderContext;
    const identifiedContext = prepareIdentifiableContext(this.document.system);
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
