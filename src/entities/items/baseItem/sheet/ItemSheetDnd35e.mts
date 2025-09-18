import { type DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import { ItemDnd35e } from '../ItemDnd35e.mjs';
import { defaultNameHeaderPartial, artHeaderPart } from '@entities/common/templates/item/index.mjs';
import { type HandlebarsTemplatePart } from '@client/applications/api/handlebars-application.mjs';
import { ItemTypeLocalizationValues } from '@items/constants.mjs';
import { createUniqueId } from '@items/components/uniqueId/index.mjs';

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
    headerStatus: string;
    // maybe I register partial names somewhere and restrict these values to those registered names?
    [key: string]: string;
};

type ItemSheetContextEnrichedTexts = {
    identifiedDescription: string;
}

type BaseRenderContextItemType = 'D35E.Item' | ItemTypeLocalizationValues;

interface ItemSheetDnd35eRenderContext<TDocument extends ItemDnd35e = ItemDnd35e> extends fa.api.DocumentSheetRenderContext<TDocument> {
  itemType: BaseRenderContextItemType;
  partials: ItemSheetPartialsList;
  // openTab: string;
  // labels: {
  //   [key: string]: string;
  // };
  isNameTabOpen: boolean;
  enrichedTexts: ItemSheetContextEnrichedTexts;
}

export const itemHeaderPartialName = 'itemHeader';
export const defaultHeaderStatusPartialName = 'defaultHeaderStatus';

abstract class ItemSheetDnd35e<
  TDocument extends ItemDnd35e = ItemDnd35e,
  TConfig extends ItemSheetDnd35eConfig<TDocument> = ItemSheetDnd35eConfig<TDocument>
> extends foundry.applications.sheets.ItemSheetV2<TDocument, TConfig> {

  static async createUniqueId(this: ItemSheetDnd35e): Promise<void> {
    const uid = createUniqueId();
    await this.document .update({ "system.uniqueId": uid });
    this.render(true);
  }

  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    actions: {
      createUniqueId: ItemSheetDnd35e.createUniqueId,
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
    classes: ['dnd35e', 'item-sheet'],
    id: 'dnd35e-item-sheet', // this probably should be unique
    position: {
      width: 560,
      height: 650,
    },
  };

  static override TABS: Record<string, fa.ApplicationTabsConfiguration> = {
    primary: {
      tabs: [
        {
          id: 'description',
          label: 'D35E.Description',
        },
        {
          id: 'namesetup',
          label: 'D35E.Name',
        }
      ],
      initial: 'description',
    },
  }

  static PARTS: Record<string, HandlebarsTemplatePart> = {
    top: artHeaderPart,
    tabs: {
        // Foundry-provided generic template
        template: 'templates/generic/tab-navigation.hbs',
    },
  };

  protected async _prepareContext (options: fa.api.DocumentSheetRenderOptions): Promise<ItemSheetDnd35eRenderContext> {
    const context = await super._prepareContext(options) as ItemSheetDnd35eRenderContext;
    context.itemType = 'D35E.Item';
    context.isNameTabOpen = this.tabGroups['primary'] === 'namesetup';
    context.partials = {
      header: itemHeaderPartialName,
      headerMain: defaultNameHeaderPartial,
      headerSummary: "emptyDiv",
      headerStatus: "emptyDiv",
    };
    context.tabs = this._prepareTabs("primary");
    context.enrichedTexts = {
      identifiedDescription: context.document.system.description.value || game.i18n.localize('D35E.DescriptionPlaceholder'),
    }
    // context.isNameTabOpen = this.tabGroups activeTab === 'nameSetup';
    // context.labels = {};

    return context;
  }

  override changeTab(tab:string, group:string, options?: { event?: Event; navElement?: HTMLElement; force?: boolean; updatePosition?: boolean }) {
    super.changeTab(tab, group, options);
  }

  get title() {
    return this.document.displayName;
  }
}

export {
  ItemSheetDnd35e,
};

export type {
  BaseRenderContextItemType,
  ItemSheetDnd35eConfig,
  ItemSheetDnd35eRenderContext,
  ItemSheetPartialsList,
  ItemSheetContextEnrichedTexts,
};
