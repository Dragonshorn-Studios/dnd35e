import { type ActorDnd35e } from "@actors/baseActor/ActorDnd35e.mjs";
import { ItemDnd35e } from "@items/baseItem/index.mjs";
import { type MaterialSystemData } from "./data/system.mjs";
import { createIdentifiableSystemData } from "@items/components/IdentifiableItem/item.mjs";

class MaterialDnd35e<TActor extends ActorDnd35e | null = ActorDnd35e | null> extends ItemDnd35e<TActor> {
  declare system: MaterialSystemData;


  override _createFreshSystemData (): MaterialSystemData {
    return {
      ...super._createFreshSystemData(),
      ...createIdentifiableSystemData(),
      bonusHardness: 0,
      bonusHpPerInch: 0,
      isAdamantineEquivalent: false,
      isAlchemicalSilverEquivalent: false,
      isColdIronEquivalent: false,
      priceDifference: 0,
      magicEquivalent: 0,
    };
  }


}

export {
  MaterialDnd35e,
};
