import { LogHelper } from "../../helpers/logHelper";


export const calculateBuffTextures = (actor: { items: Item[] } | null): Record<string, any> => {
  if (!actor) {
    LogHelper.log("calculateBuffTextures: No actor found");
    return {};
  }

  LogHelper.log("calcBuffTextures");

  const buffs = actor.items.filter((o) => o.type === "buff" || o.type === "aura");

  return buffs.reduce<Record<string, any>>((acc, cur) => {
    const id = cur.uuid;
    if (cur.system.hideFromToken || cur.system?.buffType === "shapechange") return acc;

    if (!acc[id]) {
      acc[id] = { id: cur.id, label: cur.name, icon: cur.img, item: cur };
    }

    acc[id].active = !!cur.system.active;
    return acc;
  }, {});
};
