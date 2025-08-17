
import ItemSheetV2 from "@client/applications/sheets/item-sheet.mjs";
import { systemPath } from "../../../constants/paths";

// export type WeaponSheetContext = {
//   item: Item<"weapon">;
//   isGM: boolean;
//   // header
//   showUnidentifiedData: boolean;
//   displayName: string;
// }

// export class WeaponSheet extends ItemSheetV2<WeaponSheetContext> {
//   constructor(...args: ConstructorParameters<typeof ItemSheetV2>) {
//     super(...args);
//   }

//   static override DEFAULT_OPTIONS = {
//     id: "dnd35e-item-sheet", // this probably should be unique
//     form: {
//     },
//     position: {
//       width: 600,
//       height: 400,
//       resizable: false,
//     },
//   }
  
//   static PARTS = {
//     main: {
//       template: `${systemPath}src/entities/items/weaponSheet.hbs`,
//     },
//   }

//   async _prepareContext(options: DocumentSheetV2.RenderOptions): Promise<WeaponSheetContext> {
//     const context = await super._prepareContext(options);
//     // context.showUnidentifiedData = context.item.system.isIdentified;
//     // context.displayName = context.showUnidentifiedData
//     //   ? context.item.system.unidentifiedName
//     //   : context.item.name;

//     return context;
//   }
// }