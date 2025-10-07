import { ItemDnd35e } from "@items/baseItem/index.mjs";
import { IdentifiableItemMixin } from "@items/components/IdentifiableItem/IdentifiableItem.mjs";

class MaterialDnd35e extends IdentifiableItemMixin(ItemDnd35e) {
  override _createFreshSystemData () {
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
