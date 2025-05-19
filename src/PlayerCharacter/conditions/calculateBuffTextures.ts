import { LogHelper } from "../../helpers/logHelper";

export type BuffTextures = {
  id: string;
  label: string;
  icon: string;
  item: Item;
};

// export const getActiveBuffTexturesFromActor = (actor: { items: Item[] } | null): Record<string, BuffTextures> => {
//   if (!actor) {
//     LogHelper.log("calculateBuffTextures: No actor found");
//     return {};
//   }

//   LogHelper.log("calcBuffTextures");

//   const buffs = actor.items.filter((o) => o.type === "buff" || o.type === "aura");

//   return buffs.reduce<Record<string, BuffTextures>>((acc, cur) => {
//     const id = cur.uuid;
//     // skip hidden and shapechange buffs
//     if (cur.system.hideFromToken || cur.system?.buffType === "shapechange") return acc;

//     if (!acc[id]) {
//       acc[id] = { id: cur.id, label: cur.name, icon: cur.img, item: cur };
//     }

//     acc[id].active = !!cur.system.active;
//     return acc;
//   }, {});
// };
