import { MaterialDnd35e } from "@items/material/index.mjs";
import { WeaponDnd35e } from "@items/weapon/index.mjs";
// import { Dnd35eConfig } from "./types.mjs";

const ItemConfig = {
  documentClasses: {
    "weapon": WeaponDnd35e,
    "material": MaterialDnd35e,
  },
};

export default ItemConfig;
