import { DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import ItemSheetV2 from '@client/applications/sheets/item-sheet.mjs';
import { ItemDnd35e } from '../ItemDnd35e.mjs';
import { IdentifiableItemRenderContext } from '@items/components/IdentifiableItem/index.mjs';
import { nameAndArtPart } from '@entities/common/templates/item/index.mjs';
import { itemHeaderPartialName } from './index.mjs';

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
    [key: string]: string;
};

interface ItemSheetDnd35eRenderContext extends fa.api.DocumentSheetRenderContext, IdentifiableItemRenderContext {
  itemType: 'D35E.Item' | 'D35E.Material';
  partials: ItemSheetPartialsList;
  // labels: {
  //   [key: string]: string;
  // };
}

abstract class ItemSheetDnd35e<
  TDocument extends ItemDnd35e = ItemDnd35e,
  TConfig extends ItemSheetDnd35eConfig<TDocument> = ItemSheetDnd35eConfig<TDocument>
>
  extends ItemSheetV2<TDocument, TConfig> {
  static testAction () {
    console.log('Test action triggered from ItemSheetDnd35e');
  };

  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    actions: {
      testAction: ItemSheetDnd35e.testAction,
    },
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

  static PARTS = {
    header: nameAndArtPart,
    // main: {
    //   template: `${systemPath}src/item-sheet.html`,
    // },
  };

  protected async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<ItemSheetDnd35eRenderContext> {
    const context = await super._prepareContext(options) as ItemSheetDnd35eRenderContext;
    context.itemType = 'D35E.Item';
    context.partials = {
      header: itemHeaderPartialName,
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
