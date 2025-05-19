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

export class Dnd35eItemSheet extends ItemSheet {
  constructor(...args: ConstructorParameters<typeof ItemSheet>) {
    super(...args);
  }

  static get defaultOptions(): DocumentSheet.Options<Item.Implementation> {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["dnd35e", "sheet", "item"],
      template: "systems/dnd35e/templates/item-sheet.html",
      width: 600,
      height: 400,
    });
  }

  // get template() {
  //   const path = "systems/dnd35e/templates/items/";
  //   return `${path}/${this.item.type}.html`;
  // }

  // TODO: make specific view type and drop any.
  getData() {
    const data = super.getData();
    return data;
  }
}
