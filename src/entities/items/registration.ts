import { Dnd35eItem } from "./baseItem/Dnd35eItem";

export const registerItems = () => {
  Hooks.once("init", () => {
    Object.assign(CONFIG.Item.dataModels, {
      "dnd35e.item": Dnd35eItem
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
