// import { DefaultIdentifiableItem } from "@items/components/IdentifiableItem/index.mjs";
import { applyIdentifiableRuntime, identifiableOverrides } from "@items/components/IdentifiableItem/index.mjs";
import { MaterialSystemData } from "./index.mjs";
import { ItemDnd35e } from "@items/baseItem/index.mjs";
import { IdentifiableItem } from "@items/components/IdentifiableItem/IdentifiableItem.mjs";

const materialItemType = 'material'; 
type MaterialItemType = typeof materialItemType;

class Material extends ItemDnd35e<MaterialItemType> {
  declare type: MaterialItemType;
  declare system: MaterialSystemData;
  //declare readonly _source: MaterialSource;

  override prepareBaseData(): void {
    super.prepareBaseData();
    applyIdentifiableRuntime(this);
  }

  override get displayName(): string {
    return identifiableOverrides.displayName(this as MaterialType);
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

interface MaterialType extends Material, Omit<
  IdentifiableItem,
  '_source'
    | 'clone'
    | 'collection'
    | 'collections'
    | 'createEmbeddedDocuments'
    | 'delete'
    | 'deleteDialog'
    | 'deleteEmbeddedDocuments'
    | 'effects'
    | 'importFromJSON'
    | 'setFlag'
    | 'sheet'
    
> {};

export {
  Material,
  materialItemType,
};

export type { MaterialItemType,
  MaterialType
 };
