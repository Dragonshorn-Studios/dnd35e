
import ItemSheetV2 = foundry.applications.sheets.ItemSheetV2;
import DocumentSheetV2 = foundry.applications.api.DocumentSheetV2;

export type WeaponSheetContext = {
  item: Item<"weapon">;
  isGM: boolean;
  // header
  showUnidentifiedData: boolean;
  displayName: string;
}

export class WeaponSheet extends ItemSheetV2<WeaponSheetContext> {
  constructor(...args: ConstructorParameters<typeof ItemSheetV2>) {
    super(...args);
  }

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

  async _prepareContext(options: DocumentSheetV2.RenderOptions): WeaponSheetContext {
    const context = await super._prepareContext(options);
    context.showUnidentifiedData = context.item.system.isIdentified;
    context.displayName = context.showUnidentifiedData ? context.item.system.unidentifiedName : context.item.name;

    return context;
  }
}