// export class Dnd35eItem extends ItemSheet {
//   static get defaultOptions() {
//     return mergeObject(super.defaultOptions, {
//       classes: ["dnd35e", "sheet", "item"],
//       width: 560,
//       height: 650,
//       tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-tabs", initial: "description" }],
//     });
//   }

//   getData(options) {
//     const data = super.getData(options);
//     //data.config = CONFIG.dnd35e;
//     return data;
//   }

//   get template() {
//     const path = "systems/dnd35e/templates/items/";
//     return `${path}/${this.item.type}.html`;
//   }
// }

import { systemPath } from "../../../constants/paths";
import ItemSheetV2 = foundry.applications.sheets.ItemSheetV2;
import DocumentSheetV2 = foundry.applications.api.DocumentSheetV2;
import { Dnd35eItem } from "./Dnd35eItem";
import { AnyObject } from "fvtt-types/utils";

type ItemSheetContext = {

}

export class Dnd35eItemSheet extends ItemSheetV2<ItemSheetContext> {
  constructor(...args: ConstructorParameters<typeof ItemSheetV2>) {
    super(...args);
  }

  // this still needs:
  // classes: ["dnd35e", "sheet", "item"],
  static override DEFAULT_OPTIONS = {
    id: "dnd35e-item-sheet", // this probably should be unique
    form: {
    },
    position: {
      width: 600,
      height: 400,
      resizable: false,
    },
  }

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
