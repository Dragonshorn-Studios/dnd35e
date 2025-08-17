// export class Dnd35eItem extends ItemSheet {
//   static get defaultOptions() {
//     return mergeObject(super.defaultOptions, {
//       classes: ["dnd35e", "sheet", "item"],
//       width: 560,
//       height: 650,
//       tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-tabs", initial: "description" }],
//     });
//   }

import { DocumentSheetConfiguration } from "@client/applications/api/document-sheet.mjs";
import ItemSheetV2 from "@client/applications/sheets/item-sheet.mjs";
import { ItemDnd35e } from "./ItemDnd35e";
import HandlebarsApplicationMixin from "@client/applications/api/handlebars-application.mjs";
import { systemPath } from "../../../constants/paths";

//   getData(options) {
//     const data = super.getData(options);
//     //data.config = CONFIG.dnd35e;
//     return data;
//   }

//   get template() {
//     const path = "systems/dnd35e/templates/items/";
//     return `${path}/${this.item.type}.html`;
//   }

interface ItemSheetDnd35eContext extends DocumentSheetConfiguration<ItemDnd35e> {
  
}

export class ItemSheetDnd35e extends HandlebarsApplicationMixin(ItemSheetV2<ItemDnd35e, ItemSheetDnd35eContext>) {
  // constructor(options?: Partial<ItemSheetDnd35eContext<TItem>>) {
  //   super(options);
  // }

  static testAction() {
    console.log("Test action triggered from ItemSheetDnd35e");
  };

  static override DEFAULT_OPTIONS = {
    actions: {
      testAction: ItemSheetDnd35e.testAction,
    },
    window: {
      controls: [
        {
          label: "Test",
          icon: "fas fa-times",
          action: "testAction",
        },
      ],
    },
    classes: ["dnd35e", "sheet", "item"],
    id: "dnd35e-item-sheet", // this probably should be unique
    position: {
      width: 600,
      height: 400,
      // Where does this go?
      // resizable: false,
    },
  };

  static PARTS = {
    main: {
      template: `${systemPath}src/item-sheet.html`,
    },
  }

  // get title() {
  //   return this.item.system.displayName;
  // }

  // get template() {
  //   const path = "systems/dnd35e/templates/items/";
  //   return `${path}/${this.item.type}.html`;
  // }
}
