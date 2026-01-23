import type { DocumentSheetRenderContext, DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import type { ItemDnd35e } from '../ItemDnd35e.mjs';
import type { ItemType } from '@items/itemTypes.mjs';

export interface BaseItemSheetRenderContext extends DocumentSheetRenderContext {
  document: ItemDnd35e<ItemType>;
  renderOptions: fa.ApplicationRenderOptions;
};

abstract class ItemSheetDnd35e<
  TDocument extends ItemDnd35e<ItemType> = ItemDnd35e<ItemType>
> extends foundry.applications.sheets.ItemSheetV2<TDocument, DocumentSheetConfiguration<TDocument>> {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    window: {
      controls: [
        {
          label: 'Test',
          icon: 'fas fa-times',
          action: 'testAction',
        },
      ],
    },
    classes: ['dnd35e', 'item-sheet'],
    id: 'dnd35e-item-sheet', // this probably should be unique
    position: {
      width: 560,
      height: 650,
    },
  };

  get title() {
    return this.document.displayName;
  }
}

export {
  ItemSheetDnd35e,
};
