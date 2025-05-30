import { Dnd35eItem } from "./baseItem/Dnd35eItem";
import { Dnd35eItemModel } from "./baseItem/Dnd35eItemModel";
import { Dnd35eWeapon } from "./Weapon/Weapon";
import { WeaponModel } from "./Weapon/WeaponModel";

export const registerItems = () => {
  Hooks.once("init", () => {
    CONFIG.Item.documentClass = Dnd35eItem;
    Object.assign(CONFIG.Item.dataModels, {
      "item": Dnd35eItemModel,
      "weapon": WeaponModel,
    });

    // Register specific item types
    // CONFIG.Item.typeClasses = {
    //   default: Dnd35eItem,
    //   weapon: Dnd35eWeapon,
    //   equipment: Dnd35eEquipment,
    //   spell: Dnd35eSpell,
    //   feat: Dnd35eFeat
    // };
  });
};

declare module "fvtt-types/configuration" {
  interface DocumentClassConfig {
    Item: typeof Dnd35eItem<Item.SubType>;
    Weapon: typeof Dnd35eWeapon<Item.SubType>;
  }

  interface DataModelConfig {
    Item: {
      item: typeof Dnd35eItemModel;
      weapon: typeof Dnd35eWeapon;
    };
  }

  interface ConfiguredItem<SubType extends Item.SubType> {
    document: Dnd35eItem<SubType>;
  }
}