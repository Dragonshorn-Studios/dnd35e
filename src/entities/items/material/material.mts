import { MaterialSystemData, MaterialSystemSource } from "./index.mjs";
import { ItemDnd35e, ItemSourceDnd35e } from "@items/baseItem/index.mjs";
import { applyIdentifiableRuntime, IdentifiableItem, IdentifiableItemLike, IdentifiableItemSourceProps, identifiableOverrides } from "@items/components/Identifiable/index.mjs";

const materialItemType = 'material'; 
type MaterialItemType = typeof materialItemType;

type MaterialSource = Omit<ItemSourceDnd35e, "system">
  & Omit<IdentifiableItemSourceProps, "system">
  & { system: MaterialSystemSource; };

class Material extends ItemDnd35e<MaterialItemType> {
  declare type: MaterialItemType;
  declare system: MaterialSystemData;
  //declare readonly _source: MaterialSource;

  override prepareBaseData(): void {
    super.prepareBaseData();
    applyIdentifiableRuntime<typeof this>(this);
  }

  override get displayName(): string {
    // Identifiable runtime getters are applied in prepareBaseData
    return identifiableOverrides.displayName(this as unknown as IdentifiableItemLike);
  }

  // override _createFreshSystemData() {
  //   return {
  //     ...super._createFreshSystemData(),
  //     bonusHardness: 0,
  //     bonusHpPerInch: 0,
  //     isAdamantineEquivalent: false,
  //     isAlchemicalSilverEquivalent: false,
  //     isColdIronEquivalent: false,
  //     priceDifference: 0,
  //     magicEquivalent: 0,
  //   };
  // }
}

type MaterialType = Material & IdentifiableItem;

export {
  Material,
  materialItemType,
};

export type {
  MaterialItemType,
  MaterialType,
  MaterialSource,
 };
