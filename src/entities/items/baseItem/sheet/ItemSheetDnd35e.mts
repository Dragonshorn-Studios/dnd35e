import { type DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import { ItemDnd35e } from '../ItemDnd35e.mjs';
import { defaultNameHeaderPartial, nameAndArtPart } from '@entities/common/templates/item/index.mjs';
import { type HandlebarsTemplatePart } from '@client/applications/api/handlebars-application.mjs';

//   getData(options) {
//     const data = super.getData(options);
//     //data.config = CONFIG.dnd35e;
//     return data;
//   }

//   get template() {
//     const path = "systems/dnd35e/templates/items/";
//     return `${path}/${this.item.type}.html`;
//   }

interface ItemSheetDnd35eConfig<TItem extends ItemDnd35e> extends DocumentSheetConfiguration<TItem> {}

type ItemSheetPartialsList = {
    header: string;
    headerMain: string;
    headerSummary: string;
    // maybe I register partial names somewhere and restrict these values to those registered names?
    [key: string]: string;
};

interface ItemSheetDnd35eRenderContext extends fa.api.DocumentSheetRenderContext {
  itemType: 'D35E.Item' | 'D35E.Material';
  partials: ItemSheetPartialsList;
  // labels: {
  //   [key: string]: string;
  // };
}

export const itemHeaderPartialName = 'itemHeader';

abstract class ItemSheetDnd35e<
  TDocument extends ItemDnd35e = ItemDnd35e,
  TConfig extends ItemSheetDnd35eConfig<TDocument> = ItemSheetDnd35eConfig<TDocument>
> extends foundry.applications.sheets.ItemSheetV2<TDocument, TConfig> {
  static testAction () {
    console.log('Test action triggered from ItemSheetDnd35e');
  };

  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    // actions: {
    //   testAction: ItemSheetDnd35e.testAction,
    // },
    window: {
      controls: [
        {
          label: 'Test',
          icon: 'fas fa-times',
          action: 'testAction',
        },
      ],
    },
    classes: ['dnd35e', 'sheet', 'item'],
    id: 'dnd35e-item-sheet', // this probably should be unique
    position: {
      width: 600,
      height: 400,
      // Where does this go?
      // resizable: false,
    },
  };

  static PARTS: Record<string, HandlebarsTemplatePart> = {
    top: nameAndArtPart,
    // main: {
    //   template: `${systemPath}src/item-sheet.html`,
    // },
  };

  protected async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<ItemSheetDnd35eRenderContext> {
    const context = await super._prepareContext(options) as ItemSheetDnd35eRenderContext;
    context.itemType = 'D35E.Item';
    context.partials = {
      header: itemHeaderPartialName,
      headerMain: defaultNameHeaderPartial,
      headerSummary: "emptyDiv"
    };
    // context.labels = {};

    return context;
  }

  // get title() {
  //   return this.conte
  // }

  // get template() {
  //   const path = "systems/dnd35e/templates/items/";
  //   return `${path}/${this.item.type}.html`;
  // }
}

export { ItemSheetDnd35e, type ItemSheetDnd35eConfig, type ItemSheetDnd35eRenderContext, type ItemSheetPartialsList };
