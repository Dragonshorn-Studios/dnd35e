import { ItemDnd35e } from "./baseItem/ItemDnd35e";
import { Dnd35eItemModel } from "./baseItem/Dnd35eItemModel";
import { WeaponDnd35e } from "./Weapon/WeaponDnd35e";
import { WeaponModel } from "./Weapon/WeaponModel";

export const registerItems = () => {
  Hooks.once("init", () => {
    CONFIG.Item.documentClass = Dnd35eItem;
    Object.assign(CONFIG.Item.dataModels, {
      item: Dnd35eItemModel,
      weapon: WeaponModel,
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