import { DefaultIdentifiableItem } from "@items/components/IdentifiableItem/index.mjs";
import { MaterialSource, MaterialSystemData } from "./index.mjs";

class MaterialDnd35e extends DefaultIdentifiableItem {
  // declare system: MaterialSystemData;
  // declare readonly _source: MaterialSource;

  override _createFreshSystemData() {
    return {
      ...super._createFreshSystemData(),
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
